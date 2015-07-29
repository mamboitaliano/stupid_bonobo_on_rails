class SurveysController < ApplicationController

  def index
    # list all surveys
    @all_surveys = Survey.all
    render 'index'
  end

  def new
    render 'new'
  end

  def show
    @current_survey = Survey.find(params[:id])
    render 'show'
  end

  def create
    current_user.surveys << @survey = Survey.create(title: params[:title])
    redirect_to "/surveys/#{@survey.id}/edit"
  end

  def editform
    @survey = Survey.find(params[:id])
    render 'edit_survey'
  end

  def edit
    @survey=Survey.find(params[:id])
    @survey.questions << @question = Question.create(text: params[:text])
    if request.xhr?
      render 'partials/_question'
    else
      redirect_to "/surveys/#{@survey.id}/edit"
    end
  end

  def delete

  end

  def delete_question
    question = Question.find_by(id: params[:question_id])
    survey = Survey.find_by(id: params[:survey_id])
    Question.destroy(question.id)
    survey.save
    if request.xhr?
      "YOU DA MAN"
    else
      redirect_to "/surveys/#{survey.id}/edit"
    end
  end

end

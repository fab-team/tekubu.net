class HomeController < ApplicationController
  def index
    # @books = Book.all.includes(:events).paginate(page: params[:page], per_page: 10)
    # @books = Event.where.not(title: nil).includes(:events).paginate(page: params[:page], per_page: 10)
    # @tags = Event.all_tags
    @books = Book.all.paginate(page: params[:page], per_page: 10)
    @tags = Book.all_tags
  end

  def show
    @book = Book.all.includes(:events).paginate(page: params[:page], per_page: 5)
  end

  def about
  end

  def not_found
    raise ActionController::RoutingError,
      "No route matches #{request.path.inspect}"
  end

  def bad_request
    raise ActionController::ParameterMissing, ""
  end

  def internal_server_error
    raise Exception
  end

end

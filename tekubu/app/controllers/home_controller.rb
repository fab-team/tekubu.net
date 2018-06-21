class HomeController < ApplicationController
  def index
    # @books = Book.all.reverse_order.order(id: :desc).paginate(page: params[:page], per_page: 20)
    @books = Book.all.includes(:events).paginate(page: params[:page], per_page: 5)
    logger.debug(@books)
    # @events = @books.events
  end

  def show
    # @book = Book.readable_for.find(params[:id])
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

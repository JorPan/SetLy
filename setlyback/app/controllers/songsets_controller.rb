class SongsetsController < ApplicationController
    def index
        @songsets = Songset.all
        render json: @songsets
    end
end

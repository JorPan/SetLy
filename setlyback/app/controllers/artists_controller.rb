class ArtistsController < ApplicationController
    def create
        @artist = Artist.create(
            name: params[:name],
            style: params[:style],
            location: params[:location]
        )
        render json: @artist
    end

    def show
    end
    
end

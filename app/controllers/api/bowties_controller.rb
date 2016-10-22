module API
  class BowtiesController < ApplicationController
    before_action :set_bowties, only: [:index]
    before_action :set_bowtie, only: [:show, :create, :update]

    def index
      render json: @bowties
    end

    def show
      render json: @bowtie
    end

    def create
      @bowtie = Bowtie.new(bowtie_params)

      if @bowtie.save
        render json: bowtie, status: 201, location: [:api, @bowtie]
      else
        render json: bowtie.errors, status: 422
      end
    end

    def update
      @bowtie.assign_attributes(bowtie_params)

      if @bowtie.save
        head 204
      else
        render json: bowtie.errors, status: 422
      end
    end

    def destroy
      @bowtie.destroy
      head 204
    end

  private
    def set_bowties
      @bowties = Bowtie.all
      @message = "No Bowties Found" if @bowties.empty?
    end

    def set_bowtie
      @bowtie = Bowtie.find_by(id: params[:id])
      if @bowtie.nil?
        render json: "Bowtie with id #{params.id} not found"
      end
    end

    def bowtie_params
      params.require(:bowtie).permit(:material, :pattern, :style, :image_url, :wholesale_price, :retail_price)
    end

  end

end
class SucursalesController < ApplicationController
  before_action :set_sucursale, only: [:show, :edit, :update, :destroy]

  # GET /sucursales
  # GET /sucursales.json
  def index
    @sucursales = Sucursale.where :usuarios_id => current_usuario.id
  end

  # GET /sucursales/1
  # GET /sucursales/1.json
  def show

      #if @sucursale.usuario == nil
       # @sucursale.usuario = Usuario.new()
      #end
  end

  # GET /sucursales/new
  def new
    @sucursale = Sucursale.new
  end

  # GET /sucursales/1/edit
  def edit
  end

  # POST /sucursales
  # POST /sucursales.json
  def create
    @sucursale = Sucursale.new(sucursale_params)
    @sucursale.usuarios_id = current_usuario.id
    respond_to do |format|
      if @sucursale.save
        format.html { redirect_to @sucursale, notice: 'Sucursal creada con exito!' }
        format.json { render :show, status: :created, location: @sucursale }
      else
        format.html { render :new }
        format.json { render json: @sucursale.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sucursales/1
  # PATCH/PUT /sucursales/1.json
  def update
    respond_to do |format|
      @sucursale.usuarios_id = current_usuario.id
      if @sucursale.update(sucursale_params)
        format.html { redirect_to @sucursale, notice: 'Sucursal actualizada con exito!' }
        format.json { render :show, status: :ok, location: @sucursale }
      else
        format.html { render :edit }
        format.json { render json: @sucursale.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sucursales/1
  # DELETE /sucursales/1.json
  def destroy
    @sucursale.destroy
    respond_to do |format|
      format.html { redirect_to sucursales_url, notice: 'Sucursale was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sucursale
      @sucursale = Sucursale.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sucursale_params
      params.require(:sucursale).permit(:nombre, :calle, :colonia, :numeroExterior, :numeroInterior, :ciudad, :pais, :usuarios_id)
    end
end

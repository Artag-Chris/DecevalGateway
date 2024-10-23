export class CrearGiradorDTO {
  //pasara a revisar
  private constructor(
    public readonly agenteAutoretenedor_Jur: number,
   // public readonly camaraComercioNo_Jur: string,
   // public readonly circuloNo_Jur: string,
    public readonly correoElectronico: string,
    public readonly cuentaGirador: number,
    public readonly declarante_Jur: number,
    public readonly direccion1PersonaGrupo_PGP: string,
   // public readonly direccion2PersonaGrupo_PGP: string,
   // public readonly direccion3PersonaGrupo_PGP: string,
    public readonly escrituraNo_Jur: string,
    public readonly estadoCivil: string,
    // public readonly fax1PersonaGrupo_PGP: string,
    // public readonly fax2PersonaGrupo_PGP: string,
    // public readonly fax3PersonaGrupo_PGP: string,
    // public readonly fechaCamara_Jur: Date,
    // public readonly fkIdCiudadCamaraJur: number,
    // public readonly fkIdCiudadDomicilioNat: number,
    // public readonly fkIdCiudadExpedicionNat: number,
    // public readonly fkIdCiudadJur: number,
    // public readonly fkIdClasePersona: number,
    // public readonly fkIdDepartamentoCamaraJur: number,
    // public readonly fkIdDepartamentoDomicilioNat: number,
    // public readonly fkIdDepartamentoExpedicionNat: number,
    // public readonly fkIdDepartamentoJur: number,
    // public readonly fkIdPaisCamaraJur: number,
    // public readonly fkIdPaisDomicilioNat: number,
    // public readonly fkIdPaisExpedicionNat: number,
    // public readonly fkIdPaisJur: number,
    // public readonly fkIdPaisNacionalidadNat: number,
    // public readonly fkIdTipoDocumento?: number
  ) {}

  static create(object: { [key: string]: any }): [string?, CrearGiradorDTO?] {
    const {
      agenteAutoretenedor_Jur,
      camaraComercioNo_Jur,
      circuloNo_Jur,
      correoElectronico,
      cuentaGirador,
      declarante_Jur,
      direccion1PersonaGrupo_PGP,
    //   direccion2PersonaGrupo_PGP,
    //   direccion3PersonaGrupo_PGP,
    //   escrituraNo_Jur,
    //   estadoCivil,
    //   fax1PersonaGrupo_PGP,
    //   fax2PersonaGrupo_PGP,
    //   fax3PersonaGrupo_PGP,
    //   fechaCamara_Jur,
    //   fkIdCiudadCamaraJur,
    //   fkIdCiudadDomicilioNat,
    //   fkIdCiudadExpedicionNat,
    //   fkIdCiudadJur,
    //   fkIdClasePersona,
    //   fkIdDepartamentoCamaraJur,
    //   fkIdDepartamentoDomicilioNat,
    //   fkIdDepartamentoExpedicionNat,
    //   fkIdDepartamentoJur,
    //   fkIdPaisCamaraJur,
    //   fkIdPaisDomicilioNat,
    //   fkIdPaisExpedicionNat,
    //   fkIdPaisJur,
    //   fkIdPaisNacionalidadNat,
    //   fkIdTipoDocumento,
    } = object;

    //TODO: hay que colocar las validaciones

    return [
      undefined,
      new CrearGiradorDTO(
        agenteAutoretenedor_Jur,
        camaraComercioNo_Jur,
        circuloNo_Jur,
        correoElectronico,
        cuentaGirador,
        declarante_Jur,
        direccion1PersonaGrupo_PGP,
        // direccion2PersonaGrupo_PGP,
        // direccion3PersonaGrupo_PGP,
        // escrituraNo_Jur,
        // estadoCivil,
        // fax1PersonaGrupo_PGP,
        // fax2PersonaGrupo_PGP,
        // fax3PersonaGrupo_PGP,
        // fechaCamara_Jur,
        // fkIdCiudadCamaraJur,
        // fkIdCiudadDomicilioNat,
        // fkIdCiudadExpedicionNat,
        // fkIdCiudadJur,
        // fkIdClasePersona,
        // fkIdDepartamentoCamaraJur,
        // fkIdDepartamentoDomicilioNat,
        // fkIdDepartamentoExpedicionNat,
        // fkIdDepartamentoJur,
        // fkIdPaisCamaraJur,
        // fkIdPaisDomicilioNat,
        // fkIdPaisExpedicionNat,
        // fkIdPaisJur,
        // fkIdPaisNacionalidadNat,
        // fkIdTipoDocumento
      ),
    ];
  }
}

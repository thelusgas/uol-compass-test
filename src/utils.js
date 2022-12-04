export const mapStateToInitials = (state) => {
  switch (state) {
    case "Rio Grande do Sul":
      return "RS";
    case "Santa Catarina":
      return "SC";
    case "Paraná":
      return "PR";
    case "São Paulo":
      return "SP";
    case "Rio de Janeiro":
      return "RJ";
    case "Minas Gerais":
      return "MG";
    case "Espírito Santo":
      return "ES";
    case "Bahia":
      return "BA";
    case "Pernambuco":
      return "PE";
    case "Alagoas":
      return "AL";
    case "Sergipe":
      return "SE";
    case "Paraíba":
      return "PB";
    case "Rio Grande do Norte":
      return "RN";
    case "Ceará":
      return "CE";
    case "Piauí":
      return "PI";
    case "Maranhão":
      return "MA";
    case "Pará":
      return "PA";
    case "Amapá":
      return "AP";
    case "Amazonas":
      return "AM";
    case "Rondônia":
      return "RO";
    case "Roraima":
      return "RR";
    case "Acre":
      return "AC";
    case "Tocantins":
      return "TO";
    case "Mato Grosso":
      return "MT";
    case "Mato Grosso do Sul":
      return "MS";
    case "Goiás":
      return "GO";
    case "Distrito Federal":
      return "DF";
  }
};

export const mapMonthToName = (month) => {
  switch (month) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
  }
};

export const mapDayToName = (day) => {
  switch (day) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return "Sábado";
  }
};

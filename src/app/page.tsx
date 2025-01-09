"use client";

const faturamentoMensal = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

export default function Home() {
  // Desafio 1
  function Desafio1() {
    const indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
      k = k + 1;
      soma = soma + k;
    }

    console.log(soma);
  }

  Desafio1();

  // Desafio 2
  function Desafio2(number: number) {
    let a = 0;
    let b = 1;
    let c = a + b;

    while (c < number) {
      a = b;
      b = c;
      c = a + b;
    }

    if (c === number) {
      return "Está na sequencia de fibonacci";
    } else {
      return "Não pertence a sequencia de fibonacci";
    }
  }

  console.log(Desafio2(34));

  // Desafio 3
  class Faturamento {
    faturamento: { dia: number; valor: number }[];

    constructor(faturamento: { dia: number; valor: number }[]) {
      this.faturamento = faturamento;
    }

    menorValor() {
      let menor = this.faturamento[0].valor;

      for (let i = 0; i < this.faturamento.length; i++) {
        if (
          this.faturamento[i].valor > 0 &&
          this.faturamento[i].valor < menor
        ) {
          menor = this.faturamento[i].valor;
        }
      }

      return menor;
    }

    maiorValor() {
      let maior = this.faturamento[0].valor;

      for (let i = 0; i < this.faturamento.length; i++) {
        if (this.faturamento[i].valor > maior) {
          maior = this.faturamento[i].valor;
        }
      }

      return maior;
    }

    diasAcimaDaMedia() {
      let soma = 0;
      let media = 0;

      for (let i = 0; i < this.faturamento.length; i++) {
        if (this.faturamento[i].valor > 0) {
          soma = soma + this.faturamento[i].valor;
        }
      }

      media = soma / this.faturamento.length;

      let diasAcima = 0;

      for (let i = 0; i < this.faturamento.length; i++) {
        if (this.faturamento[i].valor > media) {
          diasAcima = diasAcima + 1;
        }
      }

      return diasAcima;
    }
  }

  const faturamento = new Faturamento(faturamentoMensal);
  console.log(faturamento.menorValor());
  console.log(faturamento.maiorValor());
  console.log(faturamento.diasAcimaDaMedia());

  // Desafio 4
  function Desafio4() {
    const estados = [
      {
        estado: "SP",
        valor: 67836.43,
      },
      {
        estado: "RJ",
        valor: 36678.66,
      },
      {
        estado: "MG",
        valor: 29229.88,
      },
      {
        estado: "ES",
        valor: 27165.48,
      },
      {
        estado: "Outros",
        valor: 19849.53,
      },
    ];

    const percentualArray: {
      estado: string;
      percentual: number;
    }[] = [];
    let total = 0;
    for (let i = 0; i < estados.length; i++) {
      total = total + estados[i].valor;
    }

    for (let i = 0; i < estados.length; i++) {
      const percentual = (estados[i].valor / total) * 100;
      const objectToPush = {
        estado: estados[i].estado,
        percentual: +percentual.toFixed(2),
      };
      percentualArray.push(objectToPush);
    }

    return percentualArray;
  }

  console.log(Desafio4());

  // Desafio 5
  function Desafio5(string: string) {
    let invertida = "";

    for (let i = string.length - 1; i >= 0; i--) {
      invertida = invertida + string[i];
    }

    return invertida;
  }

  console.log(Desafio5("Hello World"));

  return <div>Desafios Target Sistemas</div>;
}

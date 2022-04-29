## Exercício feito com ❤️

Pensando no execício criei essa solução.


```

let dna = ['A','T','G','C','C','G','A','A','A','T','T','T','G','C','G'];
let rna = ['U','A','C','G','G','C','U','U','U','A','A','A','C','G','C'];

dna = dna.map(dna => rna);

console.log(dna);
```


Porém no console retorna dessa forma:

```
[
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
 [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
  [
    'U', 'A', 'C', 'G','G', 'C', 'U', 'U','U', 'A', 'A', 'A','C', 'G', 'C'
  ],
]
```


E ai depois de muito quebrar a cabeça, cheguei a conclusão:



```
class constrDna {
   constructor(transcricao){
      this.transcricao = transcricao;
      this.Rna = []
   }


   converterDNA(Dna){
      Dna.split("")
      for (let letras of Dna) {

      if (letras == "G") { letras = "C"
      this.Rna.push(letras)
      } else if (letras == "C") {letras = "G"
      this.Rna.push(letras)
      } else if (letras == "T") {letras = "A"
      this.Rna.push(letras)
      } else {
      letras = "U"
      this.Rna.push(letras)
      }
      this.Rna.join("")

   }
   return this.Rna
   }
}
   const Dna = new constrDna ("ATGCCGAAATTTGCG")
   console.log(`O filamento de RNA convertido é ${Dna.converterDNA(Dna.transcricao)}`)

```


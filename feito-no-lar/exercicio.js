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

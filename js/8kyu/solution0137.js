function DNAtoRNA(dna) {
    let RNA = "";
    // create a function which returns an RNA sequence from the given DNA sequence
    for(let i = 0; i < dna.length; i++){
      dna[i] === 'T'? RNA += 'U' : RNA += dna[i]
    }
    return RNA
  }
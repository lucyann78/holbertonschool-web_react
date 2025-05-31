// Define interfaces with unique branding for nominal typing
interface MajorCredits {
    credits: number;
    _brand: 'MajorCredits'; // unique brand for nominal typing
  }
  
  interface MinorCredits {
    credits: number;
    _brand: 'MinorCredits'; // unique brand for nominal typing
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _brand: 'MajorCredits',
    };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _brand: 'MinorCredits',
    };
  }
  
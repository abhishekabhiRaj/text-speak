  // Initialize the Web Speech API's
  const speechSynthesis = window.speechSynthesis;

  function speak() {
    // Input that you wrote
    var input = document.getElementById('input-text').value
    
    // Create a new speech synthesis object
    const readLine = new SpeechSynthesisUtterance(input);

    // Set the voice
    const voices = speechSynthesis.getVoices();
    console.log("voices",voices)
    readLine.voice = voices[1];

    // Speak the text
    speechSynthesis.speak(readLine);
  }
// Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    body.style.maxHeight = body.style.maxHeight ? null : body.scrollHeight + "px";
  });
});

// Formulário
document.getElementById('formulario').addEventListener('submit', e => {
  e.preventDefault();
  alert('Inscrição enviada com sucesso!');
  e.target.reset();
});

// Comentário
document.getElementById('enviarComentario').addEventListener('click', () => {
  const comentario = document.getElementById('comentario').value.trim();
  if(comentario){
    alert('Comentário enviado: ' + comentario);
    document.getElementById('comentario').value='';
  }
});

// Acessibilidade - Fonte
const body = document.body;
document.getElementById('aumentarFonte').addEventListener('click', () => {
  const style = window.getComputedStyle(body).fontSize;
  body.style.fontSize = (parseFloat(style) + 1) + 'px';
});
document.getElementById('diminuirFonte').addEventListener('click', () => {
  const style = window.getComputedStyle(body).fontSize;
  body.style.fontSize = (parseFloat(style) - 1) + 'px';
});

// Modo Escuro
document.getElementById('modoEscuro').addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Leitura de Conteúdo
let synth = window.speechSynthesis;
let utterance;
document.getElementById('lerConteudo').addEventListener('click', () => {
  const conteudo = document.querySelector('main').innerText;
  utterance = new SpeechSynthesisUtterance(conteudo);
  synth.speak(utterance);
});
document.getElementById('pararLeitura').addEventListener('click', () => {
  synth.cancel();
});
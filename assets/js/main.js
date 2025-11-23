
// Interactive behaviors: burger menu, modal, simple form handler, tiny animations
document.addEventListener('DOMContentLoaded', function(){
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  burger && burger.addEventListener('click', () => menu.classList.toggle('open'));

  window.openModal = function(id){
    const modal = document.getElementById('modal');
    const body = document.getElementById('modalBody');
    modal.setAttribute('aria-hidden', 'false');
    body.innerHTML = renderProject(id);
    document.body.style.overflow = 'hidden';
  }

  window.closeModal = function(){
    const modal = document.getElementById('modal');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Close modal on escape
  document.addEventListener('keydown', (e) => { if(e.key==='Escape') closeModal(); });

  window.submitContact = function(e){
    e.preventDefault();
    alert('Obrigado! Sua mensagem foi enviada (simulada). Entre em contato por: guigodoi2006@example.com');
    e.target.reset();
  }

  // Small tilt effect for hero card
  const card = document.querySelector('.card-3d');
  if(card){
    card.addEventListener('mousemove', (ev) => {
      const rX = (ev.offsetY - card.clientHeight/2) / 20;
      const rY = (ev.offsetX - card.clientWidth/2) / -20;
      card.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', ()=> card.style.transform = '');
  }
});

function renderProject(id){
  const projects = {
    1: {
      title: 'Mini-site de Vendas',
      desc: 'Loja moderna para colchões, com filtros por tamanho, carrossel, e sistema de pedidos simples. Implementado com HTML/CSS/JS e integração futura com backend.',
      tech: ['HTML','CSS','JS']
    },
    2:{
      title: 'Bateria Eletrônica MIDI',
      desc: 'Guia e scripts para configuração de loopMIDI + Hairless e integração com Addictive Drums 2 para performance com pads eletrônicos.',
      tech: ['MIDI','Audio']
    },
    3:{
      title: 'App Calm Mind',
      desc: 'Aplicativo de meditação com telas de login, cadastro, meditação e player de áudio — autenticação via Firebase.',
      tech: ['React Native','Firebase']
    }
  };
  const p = projects[id];
  if(!p) return '<p>Projeto não encontrado</p>';
  return `<h2>${p.title}</h2><p>${p.desc}</p><p><strong>Tecnologias:</strong> ${p.tech.join(', ')}</p><div style="margin-top:14px"><a class="btn" href="#">Ver demo</a> <a class="btn ghost" href="#">Ver código</a></div>`;
}

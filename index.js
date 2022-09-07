const toggleBtn = document.querySelector('#toggleBtn');
const ulElem = document.querySelector('#menuList');
const projectContainer = document.querySelector('#project-list');
const modalContainer = document.querySelector('#detail');
const modalBtn = document.querySelector('#modal-close');
const lists = document.querySelectorAll('#menuList li a');
const closeBtn = document.querySelector('#btn_close');

toggleBtn.addEventListener('click', () => {
  ulElem.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  ulElem.style.display = 'none';
});

lists.forEach((list) => {
  list.addEventListener('click', () => {
    ulElem.style.display = 'none';
  });
});

const projectArray = [
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: '',
    sourceCode: 'https://github.com/til2to/porfolio_projects/tree/main',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: '',
    sourceCode: 'https://github.com/til2to/porfolio_projects/tree/main',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: '',
    sourceCode: 'https://github.com/til2to/porfolio_projects/tree/main',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: '/images/placeholder.png',
    technologies: ['css', 'html', 'javascript', 'Ruby'],
    linkDemo: '',
    sourceCode: 'https://github.com/til2to/porfolio_projects/tree/main',
  }
];

projectArray.forEach((project) => {
  let tech = '';
  project.technologies.forEach((item) => {
    tech += `<li class="tech-item">
    <span>${item}</span>
    </li>`;
  });

  const projectItem = `<section class="ellipse_19">
    <figure class="img_placeholder">
      <img class="imagePlaceholder" src=${project.img} alt="project image">
    </figure>

    <section class="post_info">
      <article>
        <h2 class="title_post">${project.name}</h2>
      </article>
      
      <article>
        <p>
          ${project.description}
        </p>
      </article>

      <article class="tags">
        <ul>
          ${tech}
        </ul>
      </article>

      <section class="button">See Projects</section>
    </section>
  </section>`

  projectContainer.innerHTML += projectItem;
});

// const modal = `
//   <section class="title">
//     <h2>Multi-Post stroies</h2>
//     <button type="button" id="modal-close">X</button>
//   </section>

//   <figure><img src="/images/portfolio.png" alt="Project Image"></figure>
//   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
//     when an unknown printer took a galley of type and scrambled it 1960s with the 
//     releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, 
//     when an unknown printer took a galley of type veris lapoa todoe.</p>

//   <ul class="tags">
//     <li>html</li>
//     <li>Ruby on rails</li>
//     <li>CSS</li>
//   </ul>

//   <section id="button-group">
//     <button type="button" class="demo-button">
//       <span>See Live</span> 
//       <span><img id="live-icon" src="/images/live.png" alt="live icon"></span>
//     </button>
//     <button type="button" class="source-button">
//       <span>See Source</span> 
//       <span><img class="github-icon" src="/images/one.png" alt="live icon"></span>
//     </button> 
//   </section>
// `

// modalContainer.innerHTML = modal;

modalBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
  console.log('hello')
})

// Page rendering. Edit content.js to update projects and experience.
(function () {
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  const content = window.portfolioContent;
  const projectList = document.getElementById('project-list');
  content.projects.forEach((project, index) => {
    const card = element('a', 'project');
    card.href = project.link;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    const image = element('img', 'cover');
    image.src = project.image;
    image.alt = project.imageAlt;
    image.width = 640;
    image.height = 420;
    image.loading = 'lazy';
    const body = element('div');
    body.append(element('div', 'meta', `${String(index + 1).padStart(2, '0')} / ${project.category}`));
    const title = element('h3', '', project.title);
    const arrow = element('span', 'arrow', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    title.append(arrow);
    body.append(title, element('p', '', project.description), element('div', 'view', 'View project'));
    card.append(image, body);
    projectList.append(card);
  });
  const experienceList = document.getElementById('experience-list');
  content.experiences.forEach(experience => {
    const job = element('article', 'job');
    job.append(element('h3', '', experience.company), element('div', 'role', experience.role));
    const bullets = element('ul');
    experience.bullets.forEach(bullet => bullets.append(element('li', '', bullet)));
    job.append(bullets);
    experienceList.append(job);
  });
})();

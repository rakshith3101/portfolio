const filters = document.querySelectorAll('.filter');
filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach((project) => {
      const matches = filter === 'all' || (project.dataset.category || '').split(' ').includes(filter);
      project.classList.toggle('is-hidden', !matches);
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const deepLearningDetail = document.createElement('section');
deepLearningDetail.className = 'section-block reveal visible';
deepLearningDetail.id = 'deep-learning-detail';
deepLearningDetail.innerHTML = `<div class="section-heading"><div><p class="eyebrow">Deep learning systems</p><h2>Models that make it to the edge.</h2></div><p class="section-note">From training pipelines to mobile and spatial inference.</p></div><div class="project-grid">
  <article class="project-card featured"><div class="project-index">DL01 / MOBILE AI <span class="live-tag">~95% evaluation accuracy</span></div><div class="project-visual visual-model"><span>KRISHI / PLANT HEALTH</span><div class="bars"><i></i><i></i><i></i><i></i><i></i></div></div><div class="project-content"><div class="project-title"><h3>Krishi — Plant Disease Detection</h3><span class="project-type">CNN · TensorFlow Lite · Android</span></div><p>Plant-health detection from leaf images, covering TensorFlow/Keras training, image preprocessing, evaluation, and integration into a native Android application. Users can capture or select a leaf image and run on-device disease prediction.</p><div class="meta-row"><span>Python</span><span>TensorFlow</span><span>Keras</span><span>CNN</span><span>Image classification</span><span>TensorFlow Lite</span><span>Java</span><span>Android Studio</span></div><div class="evidence-row"><a href="https://github.com/rakshith3101/krishi" target="_blank" rel="noopener">Open repository ↗</a><span class="muted-link">Result — approximately 95% model accuracy</span></div></div></article>
  <article class="project-card"><div class="project-index">DL02 / MEDICAL AI</div><div class="project-content"><div class="project-title"><h3>Early-Stage Cancer Detection</h3><span class="project-type">Transfer learning · On-device inference</span></div><p>Medical-image classification research using a pretrained CNN adapted through transfer learning, then converted to TensorFlow Lite for Android integration. Presented at Mercer | Mettl AI Arena and awarded first place at the All-India level.</p><div class="meta-row"><span>Python</span><span>TensorFlow</span><span>Keras</span><span>Transfer learning</span><span>CNN</span><span>TensorFlow Lite</span><span>Android</span></div><div class="evidence-row"><a href="https://github.com/rakshith3101/Disease_Detection" target="_blank" rel="noopener">Open medical AI repository ↗</a><span class="muted-link">Result — 1st place, All-India Mercer | Mettl AI Arena</span></div></div></article>
  <article class="project-card"><div class="project-index">DL03 / 3D PERCEPTION</div><div class="project-content"><div class="project-title"><h3>VoxelNet for Spatial Threat Modelling</h3><span class="project-type">3D detection · PyTorch</span></div><p>A 3D deep-learning pipeline that generates synthetic spatial scenes, voxelizes point clouds, encodes points within each voxel, aggregates learned features, and predicts 3D object position and dimensions for simulated threat detection.</p><div class="meta-row"><span>PyTorch</span><span>NumPy</span><span>3D point clouds</span><span>Voxelization</span><span>Voxel feature encoding</span><span>Point-wise MLP</span><span>3D bounding boxes</span><span>Pygame</span></div><div class="evidence-row"><a href="https://github.com/rakshith3101/spatial-intelligence/blob/main/stupidity/spatial_intelligence/threat_modelling/voxelnet_pipeline.py" target="_blank" rel="noopener">Open VoxelNet pipeline ↗</a></div></div></article>
  <article class="project-card"><div class="project-index">DL04 / SATELLITE SEGMENTATION</div><div class="project-content"><div class="project-title"><h3>Efficient U-Net for Canopy Detection</h3><span class="project-type">Semantic segmentation · Remote sensing</span></div><p>An Efficient U-Net segmentation model for pixel-level vegetation and canopy mapping. It combines a U-Net encoder-decoder with an EfficientNet feature backbone for satellite imagery from the Western Ghats canopy pipeline.</p><div class="meta-row"><span>TensorFlow</span><span>Keras</span><span>U-Net</span><span>EfficientNet</span><span>Semantic segmentation</span><span>Sentinel-2</span><span>NASA data</span></div><div class="evidence-row"><a href="https://github.com/rakshith3101/spatial-intelligence/blob/main/stupidity/canopy_detection/src/models/efficient_unet.py" target="_blank" rel="noopener">Open Efficient U-Net ↗</a></div></div></article>
</div>`;
document.querySelector('#technical-depth').before(deepLearningDetail);

const agenticDetail = document.createElement('section');
agenticDetail.className = 'section-block reveal visible';
agenticDetail.id = 'agentic-ai-detail';
agenticDetail.innerHTML = `<div class="section-heading"><div><p class="eyebrow">Agentic AI</p><h2>Agents with an execution model.</h2></div><p class="section-note">Generation, evaluation, orchestration, and infrastructure control.</p></div><div class="project-grid">
  <article class="project-card featured" data-category="agents reinforcement-learning"><div class="project-index">AG01 / REINFORCEMENT LEARNING <span class="live-tag">LLM-as-a-Judge</span></div><div class="project-visual visual-infra"><span>GRID WORLD / GENERATE → JUDGE → REFINE</span><em>candidate paths</em><em>reward signal</em><em>GRPO</em></div><div class="project-content"><div class="project-title"><h3>Dumb2Intel — LLM-Guided Pathfinding</h3><span class="project-type">LLM reasoning · RL experimentation</span></div><p>A grid-world pathfinding experiment that progresses from LLM-generated candidate paths to reward-based evaluation, LLM-as-a-Judge selection, and Group Relative Policy Optimization. The system compares candidate trajectories, penalizes invalid moves and obstacles, rewards valid progress and goal completion, then iteratively improves the policy.</p><div class="meta-row"><span>Python</span><span>OpenRouter API</span><span>OpenAI API</span><span>LangChain</span><span>Reward functions</span><span>LLM-as-a-Judge</span><span>GRPO</span><span>Grid world</span></div><div class="evidence-row"><a href="https://github.com/rakshith3101/experiments/tree/main/dumb2intel" target="_blank" rel="noopener">Open repository ↗</a><span class="muted-link">Architecture — generation → reward evaluation → judging → candidate comparison → iterative improvement</span></div></div></article>
  <article class="project-card" data-category="agents azure rag"><div class="project-index">AG02 / WORKFLOW PLATFORM</div><div class="project-content"><div class="project-title"><h3>FlowSuit — Multi-Agent Task Orchestration</h3><span class="project-type">Agent platform · DevOps analytics</span></div><p>An internal multi-agent platform for recurring operational workflows. LangGraph coordinates agent state and task flow, LangFlow supports workflow construction, and LangSmith provides execution tracing and monitoring. Authenticated access, SSO, blob-based execution logs, and a DevOps agility board make the system operational rather than single-purpose.</p><div class="meta-row"><span>Python</span><span>LangGraph</span><span>LangFlow</span><span>LangSmith</span><span>SSO</span><span>Authentication</span><span>Blob Storage</span><span>DevOps analytics</span></div><div class="evidence-row"><span class="muted-link">Architecture — agent state → workflow execution → tracing → blob logging → analytics</span></div></div></article>
  <article class="project-card" data-category="agents azure"><div class="project-index">AG03 / INFRASTRUCTURE AUTOMATION</div><div class="project-content"><div class="project-title"><h3>Multi-Agent Infrastructure Deployment</h3><span class="project-type">Terraform · Supervisor architecture</span></div><p>A compliance-aware infrastructure-as-code workflow where a Supervisor coordinates specialized agents. Codex generates Terraform, Standby applies company requirements and constraints, and shared state, memory, and sequential or master-slave execution control the deployment path.</p><div class="meta-row"><span>Python</span><span>LangGraph</span><span>Terraform</span><span>IaC</span><span>Agent memory</span><span>State management</span><span>Supervisor pattern</span></div><div class="evidence-row"><span class="muted-link">Agents — Supervisor / Codex / Standby</span><span class="muted-link">Repository — professional project</span></div></div></article>
</div>`;
document.querySelector('#technical-depth').before(agenticDetail);

const ragDetail = document.createElement('section');
ragDetail.className = 'section-block reveal visible';
ragDetail.id = 'rag-detail';
ragDetail.innerHTML = `<div class="section-heading"><div><p class="eyebrow">RAG systems</p><h2>Answers grounded in the right context.</h2></div><p class="section-note">Knowledge retrieval, context assembly, and useful AI interfaces.</p></div><div class="project-grid"><article class="project-card featured" data-category="rag agents azure"><div class="project-index">RAG01 / RESUME PROJECT <span class="live-tag">AI assistant</span></div><div class="project-visual visual-flow"><span>RETRIEVE → AUGMENT → RESPOND</span><b>01</b><b>02</b><b>03</b><b>04</b></div><div class="project-content"><div class="project-title"><h3>AI Assistant</h3><span class="project-type">RAG · Agentic interface</span></div><p>A retrieval-augmented AI assistant developed as part of the professional AI work. The system combines document or knowledge retrieval with language-model reasoning so responses are grounded in relevant context rather than generated from the model alone. It is designed around the complete assistant loop: ingesting knowledge, retrieving supporting context, composing a response, and exposing the workflow through a usable application interface.</p><div class="meta-row"><span>Python</span><span>RAG</span><span>Embeddings</span><span>Vector search</span><span>LLM orchestration</span><span>Context grounding</span><span>FastAPI</span><span>Azure</span></div><div class="evidence-row"><a href="Rakshith-resume.pdf" target="_blank" rel="noopener">Résumé reference ↗</a><span class="muted-link">Repository — professional project</span><span class="muted-link">Use case — grounded knowledge assistance</span></div></div></article></div>`;
document.querySelector('#technical-depth').before(ragDetail);

const azureDetail = document.createElement('section');
azureDetail.className = 'section-block reveal visible';
azureDetail.id = 'azure-detail';
azureDetail.innerHTML = `<div class="section-heading"><div><p class="eyebrow">Azure cloud & machine learning</p><h2>Cloud infrastructure for useful AI.</h2></div><p class="section-note">Hands-on across storage, ML workflows, hosting, deployment, and application operations.</p></div><div class="project-grid"><article class="project-card featured" data-category="azure agents deep-learning"><div class="project-index">AZ01 / CLOUD CAPABILITY <span class="live-tag">Hands-on working knowledge</span></div><div class="project-visual visual-infra"><span>BUILD → STORE → DEPLOY → OPERATE</span><em>Azure ML</em><em>Blob Storage</em><em>App Services</em></div><div class="project-content"><div class="project-title"><h3>Azure Cloud & Machine Learning</h3><span class="project-type">Cloud deployment · ML operations</span></div><p>Hands-on experience using Microsoft Azure to build, deploy, and support cloud-based applications and machine-learning workflows. The work connects model experimentation, data and artifact storage, application hosting, and deployment across multiple Azure services.</p><div class="meta-row"><span>Microsoft Azure</span><span>Azure Machine Learning</span><span>Azure Blob Storage</span><span>Azure App Services</span><span>Azure Storage</span><span>Cloud deployment</span><span>ML deployment</span></div><div class="evidence-row"><span class="muted-link">Areas — ML experimentation and deployment</span><span class="muted-link">Blob datasets and artifacts</span><span class="muted-link">Hosted cloud applications</span></div></div></article><article class="project-card" data-category="azure"><div class="project-index">AZ02 / SERVICE MAP</div><div class="project-content"><h3>Service-aware application delivery</h3><p>Practical familiarity with selecting Azure services for compute, storage, machine-learning workflows, deployment, and application hosting—connecting the pieces into an operating cloud environment.</p><div class="meta-row"><span>Model workflows</span><span>Data storage</span><span>Application hosting</span><span>Cloud services</span></div></div></article></div>`;
document.querySelector('#technical-depth').before(azureDetail);

// Keep every capability card inside the primary filterable work grid.
const workGrid = document.querySelector('#work .project-grid');
[deepLearningDetail, agenticDetail, ragDetail, azureDetail].forEach((section) => {
  const fallbackCategory = section.id === 'deep-learning-detail' ? 'deep-learning' : section.id === 'agentic-ai-detail' ? 'agents' : section.id === 'rag-detail' ? 'rag agents azure' : 'azure';
  section.querySelectorAll('.project-card').forEach((card) => {
    if (!card.dataset.category) card.dataset.category = fallbackCategory;
    workGrid.appendChild(card);
  });
  section.remove();
});

// Remove repeated project entries while keeping the most detailed card.
const projectByName = new Map();
workGrid.querySelectorAll('.project-card').forEach((card) => {
  const heading = card.querySelector('h3');
  if (!heading) return;
  const key = heading.textContent.split('—')[0].trim().toLowerCase();
  const existing = projectByName.get(key);
  if (!existing || card.textContent.length > existing.textContent.length) {
    if (existing) existing.remove();
    projectByName.set(key, card);
  } else {
    card.remove();
  }
});

document.querySelectorAll('a[href="Rakshith-resume.pdf"]').forEach((link) => link.remove());
workGrid.querySelectorAll('.project-card').forEach((card) => {
  const title = card.querySelector('h3')?.textContent.trim().toLowerCase();
  if (title === 'dumb2intel') card.remove();
});
document.querySelector('#technical-depth')?.remove();
const technicalDepth = document.createElement('section');
technicalDepth.className = 'section-block reveal visible';
technicalDepth.id = 'technical-depth-restored';
technicalDepth.innerHTML = `<div class="section-heading"><div><p class="eyebrow">Technical depth</p><h2>How the systems are put together.</h2></div><p class="section-note">The reusable engineering layers behind the portfolio.</p></div><div class="project-grid"><article class="project-card"><div class="project-index">01 / SPATIAL COMPUTING</div><div class="project-content"><h3>Perception and world representation</h3><p>Satellite and sensor data becomes structured spatial state through tiling, rasterization, embeddings, point-cloud processing, voxelization, SLAM, visual odometry, sensor fusion, and 3D scene representation.</p><div class="meta-row"><span>Sentinel-2</span><span>GEDI / LiDAR</span><span>OpenCV</span><span>Open3D</span><span>SLAM</span><span>Voxel grids</span><span>Sensor fusion</span></div></div></article><article class="project-card"><div class="project-index">02 / MODEL SYSTEMS</div><div class="project-content"><h3>Training, evaluation, and inference</h3><p>Model work spans CNN classification, transfer learning, TensorFlow Lite conversion, Efficient U-Net segmentation, VoxelNet-style 3D detection, reward functions, LLM judging, and GRPO-based candidate refinement.</p><div class="meta-row"><span>TensorFlow</span><span>Keras</span><span>PyTorch</span><span>TensorFlow Lite</span><span>EfficientNet</span><span>U-Net</span><span>GRPO</span></div></div></article><article class="project-card"><div class="project-index">03 / APPLICATION SYSTEMS</div><div class="project-content"><h3>From model to operating product</h3><p>Deployable systems connect APIs, agent state, authentication, storage, tracing, cloud hosting, simulation, speech input, WebSockets, and application interfaces around a usable workflow.</p><div class="meta-row"><span>FastAPI</span><span>LangGraph</span><span>LangSmith</span><span>FastMCP</span><span>Azure ML</span><span>Blob Storage</span><span>WebSockets</span><span>Webots</span></div></div></article></div>`;
document.querySelector('#approach')?.before(technicalDepth);
technicalDepth.remove();

// Assign exactly one primary segment to every project.
workGrid.querySelectorAll('.project-card').forEach((card) => {
  const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
  let primary = 'deep-learning';
  if (/canopy|threat modelling|garuda|spatial learning|semantic mutation/.test(title)) primary = 'spatial';
  if (/dumb2intel/.test(title)) primary = 'reinforcement-learning';
  if (/flowsuit|infrastructure deployment/.test(title)) primary = 'agents';
  if (/ai assistant/.test(title)) primary = 'rag';
  if (/azure cloud|service-aware/.test(title)) primary = 'azure';
  if (/webots drone|disease detection|krishi|cancer|voxelnet|efficient u-net|image preprocessing|binge recommendations/.test(title)) primary = 'deep-learning';
  card.dataset.category = primary;
});
const contact = document.querySelector('#contact');
if (contact) {
  const message = contact.querySelector('p:not(.eyebrow)');
  if (message) message.textContent = 'I would be happy to collaborate. If you would like to know more about any project, feel free to contact me.';
  const actions = contact.querySelector('.contact-actions');
  if (actions && !actions.querySelector('[data-medium]')) {
    const medium = document.createElement('a');
    medium.className = 'btn btn-stroke';
    medium.dataset.medium = 'true';
    medium.href = 'https://medium.com/@rakshithsrinivasan6';
    medium.target = '_blank';
    medium.rel = 'noopener';
    medium.textContent = 'Medium ↗';
    actions.appendChild(medium);
  }
}

// Stable anchors for the voxel system map.
const anchorTitles = [
  ['canopy', 'project-canopy'], ['threat modelling', 'project-voxelnet'],
  ['garuda', 'project-garuda'], ['spatial learning blocks', 'project-spatial'],
  ['semantic mutation', 'project-semantic'], ['dumb2intel', 'project-rl'],
  ['webots drone', 'project-drone']
];
document.querySelectorAll('#work .project-card').forEach((card) => {
  const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
  const match = anchorTitles.find(([name]) => title.includes(name));
  if (match) card.id = match[1];
});
const edgeCard = document.createElement('article');
edgeCard.id = 'project-edge';
edgeCard.className = 'project-card';
edgeCard.dataset.category = 'deep-learning';
edgeCard.innerHTML = '<div class="project-index">EDGE AI / DEPLOYMENT</div><div class="project-content"><h3>Quantization and Edge AI</h3><p>Lightweight model experiments focused on quantization and constrained inference for Raspberry Pi and simulated edge environments.</p><div class="meta-row"><span>Quantization</span><span>TensorFlow Lite</span><span>Raspberry Pi</span><span>Edge inference</span></div></div>';
document.querySelector('#work .project-grid')?.appendChild(edgeCard);

const voxelWorld = document.querySelector('.voxel-world');
if (voxelWorld) {
  const field = document.createElement('div');
  field.className = 'voxel-field';
  for (let i = 0; i < 150; i += 1) {
    const block = document.createElement('i');
    block.className = 'voxel-block';
    block.style.left = `${(i * 37) % 98}%`;
    block.style.top = `${8 + ((i * 53) % 82)}%`;
    block.style.setProperty('--size', `${6 + (i % 4) * 4}px`);
    block.style.setProperty('--shade', i % 5 === 0 ? '#303030' : i % 3 === 0 ? '#202020' : '#151515');
    block.style.setProperty('--delay', `${(i % 12) * -0.3}s`);
    field.appendChild(block);
  }
  voxelWorld.prepend(field);
}

const filters = document.querySelectorAll('.filter');
filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    const allProjects = Array.from(document.querySelectorAll('#work .project-card'));
    const matchingProjects = allProjects.filter((project) => {
      const matches = filter === 'all' || (project.dataset.category || '').split(' ').includes(filter);
      project.classList.toggle('is-hidden', !matches);
      return matches;
    });
    window.activePortfolioFilter = filter;
    if (window.projectSlider) {
      window.projectSlider.setCards(matchingProjects);
    }
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
const heroStatus = document.querySelector('.hero .status-dot');
if (heroStatus && heroStatus.nextSibling) heroStatus.nextSibling.nodeValue = ' AI Engineer · Bengaluru, India';
const heroLede = document.querySelector('.hero-lede');
if (heroLede) heroLede.textContent = 'I design and ship focused AI products across spatial intelligence, AI perception, deep learning, agentic systems, and cloud-native applications.';
const buildLog = document.querySelector('.signal-top span:first-child');
if (buildLog) buildLog.textContent = 'BUILD LOG / GARUDA V2';
const focusTitle = document.querySelector('.signal-card h3');
if (focusTitle) focusTitle.textContent = 'GPS-denied autonomy.';
const focusStack = document.querySelector('.signal-card .mono');
if (focusStack) focusStack.textContent = 'Webots / YOLO / ROS 2 / Neural Network';
const principles = document.querySelectorAll('#approach .principles > div');
const workingMethod = [
  ['Think in systems', 'Start with the decision, constraints, and failure modes. Map the data, model, interface, and operating environment before choosing a tool.'],
  ['Write the protocol', 'Make the system legible through explicit contracts: inputs, outputs, agent state, evaluation signals, traceable events, and clear hand-offs between modules.'],
  ['Design, then make it work', 'Build the smallest useful loop, test it in a controlled environment, observe what fails, and iterate until the protocol survives contact with the real workflow.']
];
principles.forEach((item, index) => { if (workingMethod[index]) { item.querySelector('h3').textContent = workingMethod[index][0]; item.querySelector('p').textContent = workingMethod[index][1]; } });
document.querySelectorAll('.brand, footer span:first-child').forEach((element) => { if (element.textContent.includes('RS/LAB')) element.remove(); });
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
const voxelLegend = document.querySelector('.voxel-legend');
if (voxelLegend) voxelLegend.innerHTML = '<p class="eyebrow">Read the machine</p><h3>Hover a block.<br>Follow the system.</h3>';
if (voxelWorld) {
  const voxelLegend = document.querySelector('.voxel-legend');
  if (voxelLegend) voxelWorld.appendChild(voxelLegend);
  const hotspots = document.createElement('div');
  hotspots.className = 'voxel-hotspots';
  const projectDetails = {
    'hotspot-gps': { title: 'Garuda v2 — GPS-Denied Drone Autonomy', type: 'Spatial intelligence · Digital twin', body: 'A digital-twin direction for autonomous flight in GPS-denied environments. The system connects simulated-world state with SLAM-derived spatial information so a drone can reason about position, geometry, and navigation without relying only on global coordinates.', poc: 'Proof of concept: a simulated environment is updated from robotic spatial observations, creating a test surface for localization, mapping, and autonomous navigation.', stack: 'Python · Gazebo · SLAM · 3D spatial data · Simulation', links: [{ label: 'Spatial repository', url: 'https://github.com/rakshith3101/spatial-intelligence' }] },
    'hotspot-autonomy': { title: 'Drone Autonomy Using VLA', type: 'Autonomous systems · Active build', body: 'A simulation-first drone autonomy system where visual and language inputs are translated into actions. The stack combines a Webots environment with an LLM action loop, speech-to-instruction input, WebSocket communication, custom controllers, and computer-vision modules.', poc: 'Proof of concept: a spoken or language-level instruction is routed through the action layer and executed in a simulated drone environment with perception and control modules.', stack: 'Webots · Gemini Flash · WebSockets · YOLO · Vosk · PyAudio · WebRTC VAD', links: [{ label: 'Open-source repository', url: 'https://github.com/rakshith3101/oss-model-hack' }] },
    'hotspot-camera': { title: 'VoxelNet Threat Modelling', type: '3D perception · Deep learning', body: 'A 3D deep-learning pipeline that generates synthetic spatial scenes, converts point clouds into voxel grids, encodes points within each voxel, aggregates spatial features, and predicts 3D object position and dimensions for simulated threat detection.', poc: 'Proof of concept: synthetic point-cloud scenes are voxelized and passed through a VoxelNet-style feature encoder and detection pipeline, with the result connected to a simulated spatial environment.', stack: 'PyTorch · NumPy · 3D point clouds · Voxelization · Voxel feature encoding · 3D bounding boxes · Pygame', links: [{ label: 'VoxelNet pipeline', url: 'https://github.com/rakshith3101/spatial-intelligence/blob/main/stupidity/spatial_intelligence/threat_modelling/voxelnet_pipeline.py' }, { label: 'Threat modelling module', url: 'https://github.com/rakshith3101/spatial-intelligence/tree/main/stupidity/spatial_intelligence/threat_modelling' }] },
    'hotspot-edge': { title: 'Edge AI for JARVIS', type: 'Edge inference · Model efficiency', body: 'An edge-AI direction focused on making intelligent applications practical on constrained hardware. The work explores quantization and lightweight inference for Raspberry Pi-style and simulated deployment environments.', poc: 'Proof of concept: a quantized model is prepared for constrained execution, reducing the deployment footprint while preserving the core inference workflow.', stack: 'Quantization · TensorFlow Lite · Raspberry Pi · Edge inference · Model optimization', links: [{ label: 'GitHub profile', url: 'https://github.com/rakshith3101' }] },
    'hotspot-agent': { title: 'Multi-Agent Orchestration & Agentic AI', type: 'Agent systems · Workflow automation', body: 'A platform direction for coordinating specialized agents across recurring operational workflows. Agent state, execution traces, authenticated access, storage, and analytics turn individual models into observable systems that can be run and evaluated.', poc: 'Proof of concept: specialized agents are coordinated through stateful workflows, with tracing and execution logs providing visibility into how each task progresses.', stack: 'Python · LangGraph · LangFlow · LangSmith · SSO · Blob Storage · DevOps analytics', links: [{ label: 'Experiments repository', url: 'https://github.com/rakshith3101/experiments' }] },
    'hotspot-rl': { title: 'Shadow LLM', type: 'LLM control loop · Reinforcement learning', body: 'An experimental shadow-model direction for comparing and improving action decisions around an autonomous system. It explores how an LLM can propose, inspect, and refine actions alongside a simulated control loop.', poc: 'Proof of concept: shadow action and evaluation scripts run alongside the drone stack to inspect decisions before they are promoted into the control path.', stack: 'Python · LLM APIs · Action planning · Simulation · Control evaluation', links: [{ label: 'Shadow LLM source', url: 'https://github.com/rakshith3101/oss-model-hack/blob/master/shadow_llm.py' }] },
    'hotspot-agent-rl': { title: 'Dumb2Intel — LLM-Guided Pathfinding', type: 'LLM-as-a-Judge · Reinforcement learning', body: 'A grid-world pathfinding experiment that progresses from LLM-generated candidate paths to reward-based evaluation, LLM-as-a-Judge selection, and Group Relative Policy Optimization. Candidates are compared and iteratively refined based on relative performance.', poc: 'Proof of concept: candidate paths are generated, scored for valid movement and goal completion, judged by an LLM, and refined through GRPO-style group comparisons.', stack: 'Python · OpenRouter API · OpenAI API · LangChain · Reward functions · GRPO', links: [{ label: 'Dumb2Intel repository', url: 'https://github.com/rakshith3101/experiments/tree/main/dumb2intel' }] },
    'hotspot-nasa': { title: 'Canopy — NASA + Sentinel-2 GeoAI', type: 'Spatial intelligence · Remote sensing', body: 'A Western Ghats spatial-intelligence project using NASA datasets and Sentinel-2 satellite imagery to study canopy and environmental structure through large-scale geospatial analysis.', poc: 'Proof of concept: satellite and geospatial data are prepared as the foundation for environmental observation, canopy mapping, and spatial representation.', stack: 'Python · NASA data · Sentinel-2 · Remote sensing · Spatial analysis · Computer vision', links: [{ label: 'Canopy project', url: 'https://github.com/rakshith3101/spatial-intelligence/tree/main/stupidity/canopy_detection' }, { label: 'Visualizations', url: 'https://github.com/rakshith3101/spatial-intelligence/tree/main/stupidity/visualizations' }] }
  };
  Object.entries(projectDetails).forEach(([className, detail]) => {
    const label = `${detail.title} — ${detail.type}`;
    const hotspot = document.createElement('a');
    hotspot.className = `voxel-hotspot ${className}`;
    hotspot.href = '#system-map';
    hotspot.dataset.label = label;
    hotspot.setAttribute('aria-label', label);
    hotspot.addEventListener('mouseenter', () => {
      window.clearTimeout(voxelWorld._detailTimer);
      voxelWorld._detailTimer = window.setTimeout(() => {
      const card = document.createElement('aside');
      card.className = 'project-detail-card';
      card.innerHTML = `<button class="detail-close" aria-label="Close project detail">×</button><p class="eyebrow">${detail.type}</p><h3>${detail.title}</h3><p>${detail.body}</p><p class="detail-poc"><strong>Proof of concept</strong><br>${detail.poc}</p><div class="detail-stack">${detail.stack.split(' · ').map((item) => `<span>${item}</span>`).join('')}</div><div class="detail-links">${detail.links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener">${link.label} ↗</a>`).join('')}</div>`;
      hotspot.addEventListener('click', (event) => event.preventDefault(), { once: true });
      card.querySelector('.detail-close').addEventListener('click', () => { card.remove(); voxelWorld.classList.remove('project-focus'); });
      voxelWorld.querySelector('.project-detail-card')?.remove();
      voxelWorld.appendChild(card);
      voxelWorld.classList.add('project-focus');
      }, 180);
    });
    hotspots.appendChild(hotspot);
  });
  voxelWorld.appendChild(hotspots);
  voxelWorld.addEventListener('click', (event) => {
    if (!event.target.closest('.project-detail-card') && !event.target.closest('.voxel-hotspot')) {
      voxelWorld.querySelector('.project-detail-card')?.remove();
      voxelWorld.classList.remove('project-focus');
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.voxel-world')) {
      voxelWorld.querySelector('.project-detail-card')?.remove();
      voxelWorld.classList.remove('project-focus');
    }
  });
  const scenery = document.createElement('div');
  scenery.className = 'voxel-scenery';
  const objects = [
    ['tree tree-a', ''], ['tree tree-b', ''], ['tree tree-c', ''], ['tree tree-d', ''],
    ['mountain mountain-a', ''], ['mountain mountain-b', ''], ['mountain mountain-c', ''],
    ['water water-a', ''], ['water water-b', ''], ['house house-a', ''], ['tower tower-a', '']
  ];
  objects.forEach(([className]) => { const el = document.createElement('i'); el.className = `scene-object ${className}`; scenery.appendChild(el); });
  voxelWorld.prepend(scenery);
  const drone = voxelWorld.querySelector('.voxel-drone');
  if (drone) {
    const blocks = [
      ['motor motor-a', 'Flight control / actuation'], ['motor motor-b', 'Flight control / actuation'],
      ['motor motor-c', 'Flight control / actuation'], ['motor motor-d', 'Flight control / actuation'],
      ['sensor sensor-a', 'Computer vision / perception'], ['sensor sensor-b', 'Speech-to-instruction module'],
      ['sensor sensor-c', 'WebSocket command bridge'], ['sensor sensor-d', 'Telemetry and state'],
      ['panel panel-a', 'Gemini Flash action planner'], ['panel panel-b', 'YOLO perception module'],
      ['panel panel-c', 'Digital twin state'], ['panel panel-d', 'Autonomy test loop']
    ];
    blocks.forEach(([className, label]) => {
      const block = document.createElement('a');
      block.className = `drone-box ${className}`;
      block.href = '#system-map';
      block.dataset.label = label;
      block.setAttribute('aria-label', label);
      drone.appendChild(block);
    });
  }
}

// Two-view portfolio: the voxel story is default; the catalogue is an intentional toggle.
const workSection = document.querySelector('#work');
const signalCard = document.querySelector('.signal-card');
if (workSection && signalCard) {
  workSection.classList.add('normal-project-view');
  const toggle = document.createElement('button');
  toggle.className = 'mode-toggle';
  toggle.type = 'button';
  toggle.innerHTML = '<span class="toggle-icon">↔</span> Normal view';
  document.querySelector('#system-map .section-heading')?.appendChild(toggle);
  const sliderGrid = workSection.querySelector('.project-grid');
  const cards = sliderGrid ? Array.from(sliderGrid.querySelectorAll('.project-card')) : [];
  let current = 0;
  let activeCards = cards.slice();
  const controls = document.createElement('div');
  controls.className = 'slider-controls';
  controls.innerHTML = '<button type="button" data-slide="prev" aria-label="Previous project">←</button><span class="slide-count"></span><button type="button" data-slide="next" aria-label="Next project">→</button><button type="button" class="back-to-drone">Return to drone ↗</button>';
  workSection.querySelector('.section-heading')?.appendChild(controls);
  const renderSlide = () => {
    cards.forEach((card) => card.classList.remove('slide-active'));
    if (activeCards.length) activeCards[current]?.classList.add('slide-active');
    const count = controls.querySelector('.slide-count');
    if (count) count.textContent = activeCards.length ? `${String(current + 1).padStart(2, '0')} / ${String(activeCards.length).padStart(2, '0')}` : '00 / 00';
  };
  window.projectSlider = {
    setCards(nextCards) {
      activeCards = nextCards;
      current = 0;
      renderSlide();
    },
    syncFromFilter() {
      activeCards = cards.filter((card) => !card.classList.contains('is-hidden'));
      current = 0;
      renderSlide();
    }
  };
  controls.addEventListener('click', (event) => {
    const action = event.target.closest('[data-slide]')?.dataset.slide;
    if (action && activeCards.length) current = action === 'next' ? (current + 1) % activeCards.length : (current - 1 + activeCards.length) % activeCards.length;
    if (event.target.closest('.back-to-drone')) toggle.click();
    renderSlide();
  });
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('normal-project-mode');
    toggle.innerHTML = document.body.classList.contains('normal-project-mode') ? '<span class="toggle-icon">◈</span> Drone view' : '<span class="toggle-icon">↔</span> Normal view';
    if (document.body.classList.contains('normal-project-mode')) {
      window.projectSlider.syncFromFilter();
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else document.querySelector('#system-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  renderSlide();
}

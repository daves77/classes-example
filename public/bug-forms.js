const getAllBugs = async () => {
  const response = await axios.get('/bugs');
  return response.data;
};
const getAllFeatures = async () => {
  const response = await axios.get('/features');
  return response.data;
};

const featuresDropdown = document.querySelector('#features');

document.addEventListener('DOMContentLoaded', async () => {
  const bugs = await getAllBugs();
  const features = await getAllFeatures();
  console.log(features);

  features.forEach((feature) => {
    console.log(feature);
    const option = document.createElement('option');
    option.value = feature.id;
    option.innerText = feature.name;
    featuresDropdown.appendChild(option);
  });

  bugs.forEach((bug) => {
    const bugList = document.getElementById('bugs-list');
    const bugItem = document.createElement('li');
    bugItem.innerText = bug.problem;
    bugList.appendChild(bugItem);
  });

  console.log(features);
});

const moving = document.querySelector('#move');

const keyframe = {
    borderRadius: [
    '50% 20% 70% 30%/30% 60% 20% 50%',
    '70% 20% 40% 60%/30% 50% 70% 20%',
    // '40% 10% 50% 70%/40% 60% 20% 50%',
    // '60% 30% 50% 40%/70% 40% 30% 60%',
],
};

const option = {
    duration: 8000,
    // direction: 'alternate',
    iteration: Infinity,
};

moving.animate(keyframe, option);


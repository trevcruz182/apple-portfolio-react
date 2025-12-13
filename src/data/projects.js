const projects = [
    {
      id: 'todo-list',
      name: 'Todo List',
      description: 'A React web app that allows users to add, edit, and delete tasks, making task management simple and intuitive. Features a clean, responsive design that works seamlessly across all devices.',
      tech: ['React', 'HTML', 'CSS'],
      image: '/todoList.png',
      liveUrl: 'https://reactjs-todos-tc.netlify.app',
      repoUrl: 'https://github.com/trevcruz182/reactjs-todolist'
    },
    {
      id: 'apod',
      name: 'NASA\'s Astronomy Picture of the Day',
      description: 'A React web app that showcases NASA\'s Astronomy Picture of the Day along with detailed information, all fetched from NASA\'s public API. Users get a new space image each day, with local storage implemented to minimize API requests. Fully responsive design ensures a smooth experience across all devices.',
      tech: ['React', 'LocalStorage', 'REST APIs'],
      image: '/APOD.png',
      liveUrl: 'https://apod-react-app-tc.netlify.app/',
      repoUrl: 'https://github.com/trevcruz182/nasa-react-app'
    },
    {
      id: 'swoley-fit',
      name: 'Swoley Fit Workout Generator',
      description: 'A workout planner web app that takes the guesswork out of training. Users choose a workout split, then get customized exercises with reps, rest times, and a built-in set-tracker. Fully responsive and styled with Tailwind CSS for a clean, modern experience on any device.',
      tech: ['React', 'LocalStorage', 'Tailwind CSS'],
      image: '/swoleyFit.png',
      liveUrl: 'https://swoley-fit-tc.netlify.app',
      repoUrl: 'https://github.com/trevcruz182/swoley-fit'
    }
  ]

  export default projects

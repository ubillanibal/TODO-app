import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h2>About Our Todo App</h2>
      <p>
        Welcome to our Todo App! This simple tool is designed to help you manage
        tasks more efficiently. You can easily add tasks by typing them into the
        input field and clicking the green Add button. To delete a task, simply
        click the red X next to it. The app also lets you categorize your tasks,
        set priorities, and track your progress.
      </p>
      <h3>How it Works</h3>
      <ul>
        <li>
          <b>Adding Tasks:</b> Type your task in the input field at the top of
          the page and click the green Add button to add it to your task list.
        </li>
        <li>
          <b>Deleting Tasks:</b> If you want to remove a task, click the red X
          next to the task in the list.
        </li>
      </ul>
      <p>
        <b>Our Goal</b> Our goal is to provide a simple, no-frills task
        management experience that helps you stay organized and focused.
      </p>
      <p>
        <b>Get Started!</b> To get started, simply try adding your first task
        and manage it as you go. We hope this app helps you stay on track and
        get things done
      </p>
    </div>
  );
}

export default function Projects() {
  return (
<section>
    <header className="text-center mt-10">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-lg mt-4">
        Explore my projects that showcase my skills in software development and problem-solving.
        </p>
    </header>
    
    <div className="mt-8 max-w-4xl mx-auto">
        <ul className="list-disc pl-5 space-y-3">
        <li>
            <strong>Project One</strong> - A web application that allows users to manage tasks efficiently.
        </li>
        <li>
            <strong>Project Two</strong> - An e-commerce platform built with React and Node.js.
        </li>
        <li>
            <strong>Project Three</strong> - A mobile app that helps users track their fitness goals.
        </li>
        </ul>
    </div> 
</section>
  );
}



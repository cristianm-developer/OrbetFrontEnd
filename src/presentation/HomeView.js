import './HomeView.css';

const HomeView = (() => <div id="HomeView">
    <div className='title'>
        <h2>Key Features of the Development Approach</h2>
        <a href='https://github.com/cristianm-developer/OrbetFrontEnd'>
            <i className='orbeticon-github'></i>Github
        </a>
    </div>
    <section>

        <div>
            <h3>Responsive and Modular Design</h3>
            <p>
                A clean and well-structured layout is implemented using relative measurements to ensure seamless adaptability 
                across all screen sizes. This approach prioritizes responsiveness while maintaining usability and aesthetics.
            </p>
        </div>
        <div>
            <h3>Component-Based Architecture</h3>
            <p>
                A fully componentized structure is employed, leveraging React as the primary framework. 
                Each UI element is encapsulated, reusable, and efficiently managed to enhance maintainability and scalability.
            </p>
        </div>
        <div>
            <h3>Domain-Driven Clean Architecture</h3>
            <p>
                The projects follow a well-organized Domain-Driven Design (DDD) architecture. 
                Concerns are separated into distinct layers, ensuring clear logic distribution, improved testability, and maintainable codebases.
            </p>
        </div>
        <div>
            <h3>Clean, Declarative Code</h3>
            <p>
                Clean Code principles are strictly followed, resulting in clear, readable, and maintainable code. 
                A declarative programming style is emphasized to reduce complexity and enhance understandability.
            </p>
        </div>
        <div>
            <h3>Independent and Scalable Routing System</h3>
            <p>
                A structured and independent routing system is implemented, allowing dynamic navigation while maintaining 
                scalability and ease of modification.
            </p>
        </div>
        <div>
            <h3>State Reactivity and Efficient UI Updates</h3>
            <p>
                State reactivity is utilized to ensure that UI components dynamically update based on real-time 
                application state changes. This guarantees a smooth and intuitive user experience.
            </p>
        </div>
        <div>
            <h3>Symbol-Based Icon System</h3>
            <p>
                An optimized icon management system is implemented using symbols, improving performance and reducing redundant assets. 
                This approach ensures consistency and faster rendering across the application.
            </p>
        </div>
        <div>
            <h3>Modular CSS Scoped by Component</h3>
            <p>
                Styles are segmented and encapsulated per component, preventing global conflicts and ensuring 
                maintainable, scalable styling solutions.
            </p>
        </div>

        <div>
            <h3>Loading Page for Improved User Experience</h3>
            <p>
                A loading page is implemented to improve the user experience during page load, ensuring a smooth and seamless 
                interaction with the application while content is being loaded.
            </p>
        </div>

        <div>
            <h3>No Animation Option for Enhanced Performance</h3>
            <p>
                The application provides a "noAnimation" option, allowing users to disable animations for better performance, 
                especially on lower-end devices or during performance-critical tasks.
            </p>
        </div>
        
        <p>
            This structured and efficient development approach ensures the creation of high-quality, maintainable, 
            and scalable applications that adhere to modern web standards.
        </p>
       
    </section>
</div>)

export default HomeView;
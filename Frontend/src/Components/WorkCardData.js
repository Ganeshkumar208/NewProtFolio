import todo from '../Images/todo.png';
import portfoliopic from '../Images/portfoliopic1.png';
import EmployeeFormLogin from '../Images/EmployeeFormLogin.png';
import AnimatedWebsite from '../Images/AnimatedWebsite.png'
import ReadExcel from '../Images/ReadExcel.png'
import PaySlipIMg from '../Images/payslip.png'
import './WorkCardStyles.css';


const WorkCardData = [
    {
        imgsrc: todo,
        title: "Todo Application",
        text: "This is a Todo application, a dynamic typed task management tool built with the modern tech stack built with ReactJS and TypeScript for a responsive and type-safe frontend. The backend uses NestJS, providing the robust API's for managing your tasks, while MySQL handles the database, ensuring efficient task storage. It offers smooth task creation, updating, and deletion, making it a reliable tool for daily task management.",
        view: "https://todoappui-ganesh.vercel.app/",
        source: "https://github.com/Ganeshkumar208/Todo-Application"
    },
    {
        imgsrc: AnimatedWebsite,
        title: "Animated Portfolio WebSite",
        text: "This animated portfolio, crafted with Three.js in a Vite setup, brings a dynamic and immersive 3D experience to a streamlined layout. This site is made with interactive graphics and smooth transitions that showcase technical skill in web animation, providing a visually engaging and professional showcase that’s both fast and responsive. This project highlights a creative approach to making portfolios memorable and impactful.",
        view: "https://ganesh-animated-portfolio.vercel.app/",
        source: "https://github.com/Ganeshkumar208"
    },
    {
        imgsrc: EmployeeFormLogin,
        title: "Employee Form With Login",
        text: "This employee form project is a full-stack web application using ReactJS, NestJS, and MySQL. The ReactJS frontend includes a login page for secured access and an employee form for managing data like names, IDs, and experience. NestJS handles the backend API, managing form data validation and CRUD operations, while communicating with a MySQL database for data storage. This login system ensures authenticated access.",
        view: "https://demo1frontend.vercel.app/",
        source: "https://github.com/Ganeshkumar208/Employee-Form"
    },
    {
        imgsrc: ReadExcel,
        title: "Read Excel",
        text: "This site offers a seamless way to view Excel data directly in the browser. Simply upload your Excel file, and the data displays instantly in a clean, easy-to-read format. Built with React and enhanced by Particle.js, the interface includes subtle animations that add visual interest without distracting from the core functionality. This project combines efficient data handling with engaging design, making it both practical and visually appealing for users looking to quickly access and explore their Excel data.",
        view: "https://read-excel-ganesh.vercel.app/",
        source: "https://github.com/Ganeshkumar208/Read-Excel"
    },
    {
        imgsrc: portfoliopic,
        title: "Portfolio",
        style: { width: '500px' },
        text: "Welcome to my Portfolio! Hello, I’m Ganesh Kumar, a passionate full-stack developer with experience in creating dynamic, user-friendly web applications. Specialised in Tech Languages like ReactJs, TypeScript, and NestJs for Backend etc., I can combine clean design with efficient coding practices to deliver robust solutions. Browse through my projects, explore my skills, and let's create something great together! With a strong performance and scalability.",
        view: "https://ganeshkumar-portfolio.vercel.app/",
        source: "https://github.com/Ganeshkumar208/my-portfolio"
    },
    {
        imgsrc: PaySlipIMg,
        title: "PaySlipBot",
        style: { width: '500px' },
        text: "One of my featured projects is a Mailer Bot, an innovative tool designed to simplify bulk email communications. This application enables HR professionals to send payslips, offer letters, and other documents to employees effortlessly. It also empowers students to apply to multiple companies simultaneously, streamlining the job applications process. To enhance the users experience, I integrated With Google For Login functionality, using Google Console, Firebase Console for secure and seamless authentication.",
        view: "https://ganeshkumar-portfolio.vercel.app/",
        source: "https://github.com/Ganeshkumar208/MailerBot"
    }
]

export default WorkCardData;

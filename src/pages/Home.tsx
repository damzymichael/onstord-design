import {Link} from 'react-router-dom';
import {FaFileInvoice} from 'react-icons/fa6';
import {IoCalendar} from 'react-icons/io5';
import {FaUsers} from 'react-icons/fa';
import {FaChevronRight} from 'react-icons/fa6';
import man_talking from '@/assets/landing-page/man_talking.png';
import woman_video_call from '@/assets/landing-page/woman_video_call.png';
import woman_writing from '@/assets/landing-page/woman_writing.png';
//University images
import oau from '@/assets/landing-page/OAU.png';
import unilag from '@/assets/landing-page/UNILAG.png';
import noun from '@/assets/landing-page/NOUN.png';
import ui from '@/assets/landing-page/UI.png';
import aaua from '@/assets/landing-page/AAUA.png';
import unknwon from '@/assets/landing-page/unknown.png';
import student_video_call from '@/assets/landing-page/student-video-call.png';
import student_friends from '@/assets/landing-page/student-friends.png';
import teacher_board from '@/assets/landing-page/teacher-board.png';
import examination from '@/assets/landing-page/examination.png';
import note from '@/assets/landing-page/note_illustration.png';
import student_report from '@/assets/landing-page/student_report.png';
import girl_with_books from '@/assets/landing-page/girl-with-books.jpg';

function Home() {
  const imageSrcs = [oau, unilag, noun, ui, aaua, unknwon];
  const links = ['Home', 'Services', 'Features', 'Contact'];
  return (
    <div className='pb-20'>
      {/* Should be full but content sitting in the middle  */}
      <header className='flex items-center justify-between border px-4'>
        <Link to='/'>
          <img src='/onstord-no-bg.png' alt='' className='w-16 h-16' />
        </Link>
        <nav>
          <ul className='hidden sm:flex gap-5'>
            {links.map(link => (
              <li
                key={Math.random() * 1000}
                className='font-bold uppercase hover:font-bold hover:text-lg hover:text-pry transition-all'
              >
                <a href='#'>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero section  */}
      <section className='flex gap-5 lg:gap-0 flex-col lg:flex-row items-center justify-between px-5 sm:px-20 pt-5 sm:pt-10 pb-10 max-w-[1400px] mx-auto mb-0 lg:mb-32'>
        {/* Text and CTA  */}
        <div className='max-w-[600px] flex flex-col justify-center'>
          <h1 className='text-pry text-2xl leading-[50px] sm:text-4xl sm:leading-[60px] font-bold mb-5 text-center lg:text-left'>
            We Make Education <br />
            Faster And Easier <br /> For Teachers And Students
          </h1>
          <p className='font-medium font-poppins text-base sm:text-xl mb-5 text-center lg:text-left'>
            A platform designed specifically for lecturers to share educational
            resources with students. With Onstord, you have the opportunity to
            create, upload, and manage a wide range of academic materials,
            including lecture notes, video tutorials, assignments, and more.
          </p>
          <div className='flex justify-center lg:justify-start gap-5'>
            <button className='px-5 py-3 border rounded-lg bg-pry text-white uppercase font-bold'>
              Lecturer
            </button>
            <button className='px-5 py-3 border border-pry rounded-lg text-pry uppercase font-bold'>
              Students
            </button>
          </div>
        </div>

        {/* Images for mobile  */}
        <div className='p-5 relative flex flex-col w-full lg:hidden'>
          <div className='z-10 max-w-[200px] mx-auto w-11/12 -translate-x-10 -top-5 -right-16'>
            <div className='relative'>
              {/* Dimension width={150} height={100} */}
              <img
                src={man_talking}
                alt='Man on video call'
                className='rounded-xl w-full'
              />
              <div className='bg-[#23BDEE] w-20 h-12 rounded-xl absolute -top-3 -left-3 -z-10' />
            </div>
          </div>

          <div className='max-w-[200px] w-11/12 z-20 translate-x-10 mx-auto -translate-y-10'>
            <div className='relative '>
              {/* Dimension width={612} height={408} */}
              <img
                src={woman_video_call}
                alt='Woman on video call'
                className='rounded-xl'
              />
              <div className='bg-[#23BDEE] w-36 h-20 rounded-xl absolute -bottom-3 -right-3 -z-20' />
            </div>
          </div>

          <div className='max-w-[200px] w-11/12 -translate-x-10 mx-auto -translate-y-16'>
            <div className='relative'>
              {/* Dimension width={612} height={408} */}
              <img
                src={woman_writing}
                alt='Woman on video call'
                className='rounded-xl'
              />
              <div className='bg-[#23BDEE] w-28 h-40 rounded-xl absolute -bottom-3 -left-3 -z-10' />
            </div>
          </div>
        </div>

        {/* Images for desktop  */}
        <div className='relative overflow-x-clip w-full min-h-96 -mr-20 hidden lg:flex'>
          {/* Get height of this to use for top value in second image  */}
          <div className='absolute z-10 max-w-[350px] w-11/12 -top-5 -right-16'>
            <div className='relative'>
              {/* Dimension width={570} height={381} */}
              <img
                src={man_talking}
                alt='Man on video call'
                className='rounded-3xl w-full'
              />
              <div className='bg-[#23BDEE] w-20 h-20 rounded-3xl absolute -top-3 -left-3 -z-10' />
            </div>
          </div>

          {/* Get height of this to use for top value in third image  */}
          <div className='absolute max-w-[370px] w-11/12 top-32 left-40'>
            <div className='relative'>
              {/* Dimension width={612} height={408} */}
              <img src={woman_video_call} alt='Woman on video call' />
              <div className='bg-[#23BDEE] w-20 h-20 rounded-3xl absolute -bottom-3 -right-3 -z-10' />
            </div>
          </div>

          <div className='absolute max-w-[310px] w-11/12 top-72 left-40'>
            <div className='relative'>
              {/* Dimension width={612} height={408} */}
              <img src={woman_writing} alt='Woman on video call' />
              <div className='bg-[#23BDEE] w-20 h-20 rounded-3xl absolute -bottom-3 -left-3 -z-10' />
            </div>
          </div>
        </div>
      </section>

      <section className='mb-20 max-w-[1400px] mx-auto'>
        <h3 className='text-[#696984] font-medium text-center text-base sm:text-2xl mb-5'>
          Trusted by 1000+ Lecturers
        </h3>
        <div className='px-28'>
          <div className='flex gap-5 sm:gap-10 justify-center max-w-[600px] mx-auto px-2'>
            {imageSrcs.map(src => (
              <img
                src={src}
                alt='University Logo'
                key={Math.random() * 10000}
                className='object-cover grayscale opacity-50 w-1/6'
              />
            ))}
          </div>
        </div>
      </section>

      <section className='px-5 sm:px-20 max-w-[1400px] mx-auto mb-20'>
        <h3 className='uppercase font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-5'>
          Our Services
        </h3>
        <p className='text-center sm:text-xl max-w-[700px] mx-auto mb-20'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur id
          ipsam atque sapiente at modi nemo ullam consectetur temporibus
          recusandae autem, nostrum sit, iure deserunt maxime? Praesentium nobis
          dolores minus.
        </p>
        <ul className='px-5 grid gap-10 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
          {/* Move icon to top edge of container  */}
          <li className='bg-white shadow-custom rounded-3xl p-4 relative'>
            <div className='bg-[#5B72EE] text-white p-4 w-max mx-auto rounded-full mb-2 shadow-xl -translate-y-10'>
              <FaFileInvoice size={25} />
            </div>
            <h4 className='font-poppins font-medium text-xl text-center mb-3'>
              Online Billing, <br /> Invoicing, & Contracts
            </h4>
            <p className='text-center text-[#79828C] px-5 sm:px-10'>
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </p>
          </li>

          <li className='bg-white shadow-custom rounded-3xl p-4 relative'>
            <div className='bg-[#545AE8] text-white p-4 w-max mx-auto rounded-full mb-2 shadow-xl -translate-y-10'>
              <IoCalendar size={25} />
            </div>
            <h4 className='font-poppins font-medium text-xl text-center mb-3'>
              Easy Scheduling & <br /> Attendance Tracking
            </h4>
            <p className='text-center text-[#79828C] px-5 sm:px-10'>
              Schedule and reserve classrooms at one campus or multiple
              campuses. Keep detailed records of student attendance
            </p>
          </li>

          <li className='bg-white shadow-custom rounded-3xl p-4 relative'>
            <div className='bg-[#29B9E7] text-white p-4 w-max mx-auto rounded-full mb-2 shadow-xl -translate-y-10'>
              <FaUsers size={25} />
            </div>
            <h4 className='font-poppins font-medium text-xl text-center mb-3'>
              Customer Tracking
            </h4>
            <p className='text-center text-[#79828C] px-5 sm:px-10'>
              Automate and track emails to individuals or groups. Skilline’s
              built-in system helps organize your organization
            </p>
          </li>
        </ul>

        <p className='text-[#01162F] px-5 sm:px-10 lg:px-32 xl:px-36 text-center sm:text-xl my-20'>
          Onstord is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>

        <div className='font-poppins flex gap-5 sm:gap-10 items-center justify-center mt-5 sm:mt-10 mb-28'>
          {/* Lecturer's getting started  */}
          <div className='w-2/5 max-w-[400px] relative flex flex-col justify-end sm:pb-5 bg-lecturer-lib bg-cover bg-no-repeat'>
            <p className='text-white uppercase font-semibold text-base sm:text-xl text-center mb-3 mt-14 sm:mt-28'>
              For lecturers
            </p>
            <Link
              to='#'
              className='bg-[#23BDEEE5] absolute -bottom-10 left-1/2 -translate-x-1/2 sm:translate-x-0 z-10 sm:static block w-max mx-auto bg-opacity-90 px-6 py-2 rounded-full text-white font-bold text-sm sm:text-lg uppercase'
            >
              Get started
            </Link>
          </div>

          {/* Student's getting started  */}
          <div className='w-2/5 max-w-[400px] relative flex flex-col justify-end sm:pb-5 bg-student-smile bg-cover bg-no-repeat'>
            <p className='text-white uppercase font-poppins font-semibold text-base sm:text-xl text-center mb-3 mt-14 sm:mt-28'>
              For students
            </p>
            <Link
              to='#'
              className='bg-[#23BDEEE5] absolute -bottom-10 left-1/2 -translate-x-1/2 sm:translate-x-0 z-10 sm:static block w-max mx-auto bg-opacity-90 px-6 py-2 rounded-full text-white font-bold text-sm sm:text-lg uppercase'
            >
              Download
            </Link>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
          <article className='max-w-[500px]'>
            <h5 className='font-medium text-center sm:text-left text-2xl sm:text-3xl text-[#2F327D] mb-10 relative'>
              <div
                aria-hidden
                className='hidden sm:block absolute -top-2 -left-4 w-12 h-12 bg-[#D5E1F3] rounded-full -z-10'
              />
              Everything you can do in a physical classroom,{' '}
              <span className='text-[#054292]'>you can do with Onstord</span>
            </h5>
            <p className='text-[#696984] text-lg sm:text-xl'>
              Onstord school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
          </article>
          <div className='relative'>
            <div className='hidden sm:block bg-[#23BDEE] w-20 h-20 rounded-3xl absolute -z-10 -top-3 -left-3' />
            {/* Dimension width={705} height={470} */}
            <img
              src={student_video_call}
              alt='Student video call'
              className='w-full max-w-[500px]'
            />
            <div className='hidden sm:block bg-[#9FA0BE] w-20 h-20 rounded-3xl absolute -z-10 -bottom-3 -right-3' />
          </div>
        </div>
      </section>

      <section className='px-5 sm:px-20 mb-20'>
        <h3 className='uppercase font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-5'>
          Our features
        </h3>
        <p className='text-center text-[#696984] text-lg sm:text-xl mb-16 sm:mb-28'>
          These very extraordinary features, can make learning activities more
          efficient
        </p>
        <ul
          aria-description='List of our features'
          className='space-y-20 lg:space-y-32'
        >
          {/* User interface  */}
          <li className='flex justify-between flex-col lg:flex-row gap-10'>
            <div className='relative w-full lg:w-1/2'>
              <div className='bg-[#AED0EF] w-32 h-32 rounded-full absolute -top-[60px] -z-10 hidden sm:block' />
              <div className='bg-[#33D9EF] w-8 h-8 rounded-full absolute left-[200px] -top-10 hidden sm:block' />
              {/* Dimension width={722} height={528}  */}
              <img src={student_friends} alt='Students' className='w-full' />
              <div className='bg-[#5B61EB] w-32 h-32 hidden lg:block rounded-full absolute -bottom-5 -right-[20px] -z-10' />
            </div>
            <div className='lg:max-w-[520px]'>
              <h3 className='text-[#2F327D] font-semibold text-2xl sm:text-3xl'>
                A <span className='text-[#3491E7]'>user interface</span>{' '}
                designed for the classroom on your mobile
              </h3>
              <ul className='mt-8 space-y-3'>
                <li className='flex gap-3 sm:gap-5 items-start'>
                  <div className='p-2 bg-[#FBFBFB] shadow-lg rounded-full'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 27 26'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        width='11.8182'
                        height='11.8182'
                        rx='2'
                        fill='#2F327D'
                      />
                      <rect
                        y='14.1816'
                        width='11.8182'
                        height='11.8182'
                        rx='2'
                        fill='#2F327D'
                      />
                      <rect
                        x='14.7727'
                        width='11.8182'
                        height='11.8182'
                        rx='2'
                        fill='#2F327D'
                      />
                      <rect
                        x='14.7727'
                        y='14.1816'
                        width='11.8182'
                        height='11.8182'
                        rx='2'
                        fill='#3491E7'
                      />
                    </svg>
                  </div>
                  <p className='text-[#696984] text-lg sm:text-xl'>
                    Teachers don’t get lost in the grid view and have a
                    dedicated podium space.
                  </p>
                </li>
                <li className='flex gap-3 sm:gap-5 items-start'>
                  <div className='bg-[#FBFBFB] w-max relative shadow-lg rounded-full p-2'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 28 26'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='8'
                        y='6'
                        width='20'
                        height='20'
                        rx='2'
                        fill='#2F327D'
                      />
                      <rect
                        width='21.2245'
                        height='21.2245'
                        rx='2'
                        fill='#3491E7'
                      />
                    </svg>
                  </div>
                  <p className='text-[#696984] text-lg sm:text-xl'>
                    TA’s and presenters can be moved to the front of the class.
                  </p>
                </li>
                <li className='flex gap-3 sm:gap-5 items-start'>
                  <div className='bg-[#FBFBFB] w-max relative shadow-lg rounded-full p-2'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 30 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4.5 10.375C6.15469 10.375 7.5 8.91758 7.5 7.125C7.5 5.33242 6.15469 3.875 4.5 3.875C2.84531 3.875 1.5 5.33242 1.5 7.125C1.5 8.91758 2.84531 10.375 4.5 10.375ZM25.5 10.375C27.1547 10.375 28.5 8.91758 28.5 7.125C28.5 5.33242 27.1547 3.875 25.5 3.875C23.8453 3.875 22.5 5.33242 22.5 7.125C22.5 8.91758 23.8453 10.375 25.5 10.375ZM27 12H24C23.175 12 22.4297 12.3605 21.8859 12.9445C23.775 14.0668 25.1156 16.093 25.4062 18.5H28.5C29.3297 18.5 30 17.7738 30 16.875V15.25C30 13.4574 28.6547 12 27 12ZM15 12C17.9016 12 20.25 9.45586 20.25 6.3125C20.25 3.16914 17.9016 0.625 15 0.625C12.0984 0.625 9.75 3.16914 9.75 6.3125C9.75 9.45586 12.0984 12 15 12ZM18.6 13.625H18.2109C17.2359 14.1328 16.1531 14.4375 15 14.4375C13.8469 14.4375 12.7688 14.1328 11.7891 13.625H11.4C8.41875 13.625 6 16.2453 6 19.475V20.9375C6 22.2832 7.00781 23.375 8.25 23.375H21.75C22.9922 23.375 24 22.2832 24 20.9375V19.475C24 16.2453 21.5812 13.625 18.6 13.625ZM8.11406 12.9445C7.57031 12.3605 6.825 12 6 12H3C1.34531 12 0 13.4574 0 15.25V16.875C0 17.7738 0.670312 18.5 1.5 18.5H4.58906C4.88438 16.093 6.225 14.0668 8.11406 12.9445Z'
                        fill='#2F327D'
                      />
                    </svg>
                  </div>
                  <p className='text-[#696984] text-lg sm:text-xl'>
                    Teachers can easily see all students and class data at one
                    time.
                  </p>
                </li>
              </ul>
            </div>
          </li>

          {/* Perfect tools  */}
          <li className='flex justify-between flex-col-reverse lg:flex-row gap-10 lg:gap-16'>
            <div className='lg:max-w-[520px]'>
              <h3 className='text-[#2F327D] font-semibold text-2xl sm:text-3xl lg:max-w-[300px] mb-4 sm:mb-8'>
                The perfect <span className='text-[#3491E7]'>Tools</span> For
                Teachers And Learners
              </h3>
              <p className='text-[#696984] text-lg sm:text-xl lg:max-w-[400px]'>
                Class has a dynamic set of teaching tools built to be deployed
                and used during class. Teachers can handout assignments in
                real-time for students to complete and submit.
              </p>
            </div>
            <div className='relative w-full lg:w-1/2'>
              <div className='bg-[#FF6A6A] w-40 h-40 rounded-full absolute -top-[28px] left-28 -z-10 hidden lg:block' />
              <div className='bg-[#6BF0A8] w-5 h-5 rounded-full absolute -top-[70px] left-80 -z-10 hidden lg:block' />
              <div className='hidden lg:grid gap-10 grid-cols-10 grid-rows-7 absolute bottom-0 -rotate-12 origin-bottom-left '>
                {Array.from({length: 70}).map((_, i) => (
                  <div className='w-2 h-2 bg-[#DCE2EE] rounded-full' key={i} />
                ))}
              </div>
              {/* Dimension width={684} height={465}  */}
              <img src={teacher_board} alt='Students' className='w-full' />
            </div>
          </li>

          {/* Assessment, quizzes, tests  */}
          <li className='flex gap-20 flex-col lg:flex-row lg:gap-16'>
            <div className='relative w-full lg:w-1/2'>
              <div className='bg-[#687EF3] w-20 h-20 rounded-full absolute -top-[16px] -translate-x-1/2 -z-10 hidden lg:block' />
              <div className='bg-[#F3A268] w-4 h-4 rounded-full absolute -top-10 left-16 -z-10 hidden lg:block' />

              {/* Dimension width={612} height={408}  */}
              <img src={examination} alt='#' className='w-full' />
              {/* Dimension width={492} height={344}  */}
              <img
                src={note}
                alt='#'
                className='w-1/2 border border-[#2F327D] absolute right-10  lg:-right-10 -translate-y-3/4 lg:-translate-y-1/2'
              />
              <div className='bg-[#34E7A5] w-5 h-5 rounded-full absolute -bottom-1/4 -translate-x-1/2 -z-10 hidden lg:block' />
            </div>
            <div>
              <h3 className='text-[#2F327D] font-semibold text-2xl sm:text-3xl mb-4 sm:mb-8'>
                Assessments, <br className='hidden lg:block' />{' '}
                <span className='text-[#3491E7]'>Quizzes</span>, Tests
              </h3>
              <p className='text-[#696984] text-lg sm:text-xl lg:max-w-[500px]'>
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </li>

          {/* Class management tools  */}
          <li className='flex items-center justify-between flex-col-reverse lg:flex-row gap-10 lg:gap-16 mt-32'>
            <div className='lg:max-w-[650px]'>
              <h3 className='text-[#2F327D] font-semibold text-2xl sm:text-3xl lg:max-w-[350px] mb-4 sm:mb-8'>
                <span className='text-[#3491E7]'>Class management</span> Tools
                for Educators
              </h3>
              <p className='text-[#696984] text-lg sm:text-xl lg:max-w-[500px]'>
                Class provides tools to help run and manage the class such as
                Class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>
            <div className='w-full lg:w-1/2'>
              {/* Dimension width={808} height={560}  */}
              <img src={student_report} alt='Students' className='w-full' />
            </div>
          </li>
        </ul>
      </section>

      <section className='px-5 sm:px-20 pb-28 flex justify-between relative'>
        <div className=''>
          <header className='mb-10'>
            <div className='hidden sm:flex gap-4 items-center mb-7'>
              <div className='w-20 border border-[#525596]' />
              <p className='text-[#525596] text-lg'>TESTIMONIAL</p>
            </div>
            <h2 className='font-bold text-[#2F327D] text-4xl sm:text-5xl'>
              What They Say?
            </h2>
          </header>
          <div className='space-y-4 text-lg sm:text-xl text-[#696984] max-w-[550px]'>
            <p>
              Onstord has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p>
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p>Are you too? Please give your assessment</p>
          </div>
          <div className='absolute bottom-0 w-11/12 max-w-[480px] p-7 shadow-quote rounded-2xl text-[#5F5F7E]'>
            <blockquote className='text-base sm:text-lg mb-4'>
              "Thank you so much for your help. It's exactly what I've been
              looking for. You won't regret it. It really saves me time and
              effort. Skilline is exactly what our business has been lacking."
            </blockquote>
            {/* Paragraph below should be Nunito Sans font  */}
            <p className='font-medium text-xl sm:text-2xl ml-5'>Gloria Rose</p>
          </div>
        </div>
        <div className='relative w-1/2 max-w-[400px] mx-auto h-[500px]'>
          <img
            src={girl_with_books}
            alt='Girl with books'
            className='w-full h-full object-cover rounded-2xl -z-10'
          />
          <button className='bg-white p-3 w-max rounded-full shadow-lg absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2'>
            <FaChevronRight color='#1EA4CE' />
          </button>
        </div>
        <div className='absolute bg-white bottom-0 right-0 z-20 mr-5 sm:mr-20 w-full max-w-[480px] p-7 shadow-quote rounded-2xl text-[#5F5F7E]'>
          <div className='relative'>
            <div />
            <blockquote className='text-base sm:text-lg mb-4'>
              "Thank you so much for your help. It's exactly what I've been
              looking for. You won't regret it. It really saves me time and
              effort. Skilline is exactly what our business has been lacking."
            </blockquote>
            {/* Paragraph below should be Nunito Sans font  */}
            <p className='font-medium text-xl sm:text-2xl ml-5'>Gloria Rose</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

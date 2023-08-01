import series from '../assets/series.jpg'
import series1 from '../assets/series1.jpg'
import series2 from '../assets/series2.jpg'
import quizz from '../assets/quizz.jpg'
import quizz1 from '../assets/quizz1.jpg'
import quizz2 from '../assets/quizz2.jpg'
import chat from '../assets/chat.jpg'
import chat1 from '../assets/chat1.jpg'

const data = [
    {
        imgs: [series1, series, series2],
        title: 'Series',
        opis: 'The site where you can find a list of films, cartoons and series in any genre. You can add movies to the site yourself, as well as edit movies added by another users.',
        linkGitServer: 'https://github.com/greshnikovaa/series-server',
        linkGitClient: 'https://github.com/greshnikovaa/series-client',
        linkSite: 'https://list-serial.netlify.app/'
    },
    {
        imgs: [quizz, quizz2, quizz1],
        title: 'Quizz',
        opis: 'The site where you can find a list of tests. Registered and authorized users (teachers) can create new tests, edit and delete old ones. Users who cannot register (students) take tests assigned by the teacher and at the end see their scores for passing the test.',
        linkGitServer: 'https://github.com/greshnikovaa/quizz-server',
        linkGitClient: 'https://github.com/greshnikovaa/quizz-client',
        linkSite: 'https://quizz-greshnikovaa.netlify.app'
    },
    {
        imgs: [chat, chat1],
        title: 'Chat',
        opis: 'The site where the chat is located. In it, you must choose a name for yourself, from which messages will come. Old messages are not deleted and remain in the chat history.',
        linkGitServer: 'https://github.com/greshnikovaa/chat-server',
        linkGitClient: 'https://github.com/greshnikovaa/chat-client',
        linkSite: 'https://chat-greshnikovaa.netlify.app/'
    }
]

export default data
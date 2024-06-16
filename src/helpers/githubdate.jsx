import axios from 'axios';

const getLatestCommitDate = async (username, repoName) => {
    try {
        const response = await axios.get(
            `https://api.github.com/repos/${username}/${repoName}/commits`
        );
        // Extract latest commit date from the response
        if (response.data && response.data.length > 0) {
            const latestCommit = response.data[0];
            const commitDate = new Date(latestCommit.commit.author.date);
            
            // Format the date to DD/MM/YYYY
            const day = commitDate.getDate().toString().padStart(2, '0');
            const month = (commitDate.getMonth() + 1).toString().padStart(2, '0');
            const year = commitDate.getFullYear();

            return `${day}/${month}/${year}`;
        }
    } catch (error) {
        console.error('Error fetching commit info:', error);
    }
    return null; // Return null if there's an error or no data
};

export default getLatestCommitDate;

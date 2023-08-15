import axios from "axios";

const api = (() => {
  const BASE_URL = "https://forum-api.dicoding.dev/v1";

  function putAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  async function register({ name, email, password }) {
    const {
      data: {
        status,
        data: { user },
      },
    } = await axios.post(`${BASE_URL}/register`, {
      name,
      email,
      password,
    });

    if (status !== "success") {
      throw new Error(message);
    }

    return user;
  }

  async function login({ email, password }) {
    const {
      data: {
        status,
        data: { token },
      },
    } = await axios.post(`${BASE_URL}/login`, { email, password });

    if (status !== "success") {
      throw new Error(message);
    }

    return token;
  }

  async function getOwnProfile() {
    const {
      data: {
        status,
        data: { user },
      },
    } = await axios.get(`${BASE_URL}/users/me`);

    if (status !== "success") {
      throw new Error(message);
    }

    return user;
  }

  async function createThread({ title, body, category }) {
    const {
      data: {
        status,
        data: { thread },
      },
    } = await axios.post(
      `${BASE_URL}/threads`,
      {
        title,
        body,
        category,
      },
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );

    if (status !== "success") {
      throw new Error(message);
    }

    return thread;
  }

  async function getAllThreads() {
    const {
      data: {
        status,
        data: { threads },
      },
    } = await axios.get(`${BASE_URL}/threads`);

    if (status !== "success") {
      throw new Error(message);
    }

    return threads;
  }

  async function getThreadDetail(id) {
    const {
      data: {
        status,
        data: { detailThread },
      },
    } = await axios.get(`${BASE_URL}/talks/${id}`);

    if (status !== "success") {
      throw new Error(message);
    }

    return detailThread;
  }

  async function createComment(id, content) {
    const {
      data: {
        status,
        data: { comment },
      },
    } = await axios.post(
      `${BASE_URL}/threads/${id}/comments`,
      {
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );

    if (status !== "success") {
      throw new Error(message);
    }

    return comment;
  }

  async function upVoteThread(id) {
    const {
      data: {
        status,
        data: { vote },
      },
    } = await axios.post(`${BASE_URL}/threads/${id}/up-vote`, _, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    if (status !== "success") {
      throw new Error(message);
    }

    return vote;
  }

  async function downVoteThread(id) {
    const {
      data: {
        status,
        data: { vote },
      },
    } = await axios.post(`${BASE_URL}/threads/${id}/down-vote`, _, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    if (status !== "success") {
      throw new Error(message);
    }

    return vote;
  }

  async function neutralVoteThread(id) {
    const {
      data: {
        status,
        data: { vote },
      },
    } = await axios.post(`${BASE_URL}/threads/${id}/up-vote`, _, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    if (status !== "success") {
      throw new Error(message);
    }

    return vote;
  }

  async function upVoteComment(threadId, commentId) {
    const {
      data: {
        status,
        data: { vote },
      },
    } = await axios.post(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
      _,
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );

    if (status !== "success") {
      throw new Error(message);
    }

    return vote;
  }

  async function downVoteComment(threadId, commentId) {
    const {
      data: {
        status,
        data: { vote },
      },
    } = await axios.post(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
      _,
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );

    if (status !== "success") {
      throw new Error(message);
    }

    return vote;
  }

  async function neutralVoteComment(threadId, commentId) {
    const {
      data: {
        status,
        data: { vote },
      },
    } = await axios.post(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
      _,
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );

    if (status !== "success") {
      throw new Error(message);
    }

    return vote;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllThreads,
    getThreadDetail,
    createThread,
    upVoteThread,
    downVoteThread,
    neutralVoteThread,
    upVoteComment,
    downVoteComment,
    neutralVoteComment,
  };
})();

export default api;

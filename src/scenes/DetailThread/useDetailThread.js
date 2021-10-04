/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {getThreadComment} from 'utils';
import {useSelector} from 'react-redux';
const useDetailThread = threadId => {
  const userData = useSelector(state => state.user.data);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]); // all comment from database
  const [commentLimit, setCommentLimit] = useState(10);
  const [comment, setComment] = useState(''); // current user comment state

  useEffect(() => {
    handleThreadComment();
  }, [commentLimit]);

  const handleThreadComment = async () => {
    const response = await getThreadComment(threadId, commentLimit);
    if (response.request.status === 200) {
      setComments(response.data);
    }
    setLoading(false);
  };

  const handleLoadMoreComment = () => {
    if (comments.length > 10) {
      setLoading(true);
      setCommentLimit(commentLimit + 5);
    }
  };

  const handleSendComment = async () => {
    const commentInput = {
      id: 0,
      user_id: userData.id,
      body: comment,
      created_at: new Date(),
      reaction: [
        {
          id: 1,
          type: 'beer',
          total: 10,
        },
        {
          id: 1,
          type: 'clap',
          total: 5,
        },
        {
          id: 1,
          type: 'love',
          total: 2,
        },
      ],
      user: userData,
    };
    setComments(comments => [...comments, commentInput]);
    setComment('');
  };

  return {
    loading,
    comments,
    handleLoadMoreComment,
    comment,
    setComment,
    handleSendComment,
  };
};

export default useDetailThread;

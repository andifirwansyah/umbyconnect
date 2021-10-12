/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {
  getThreadComment,
  createThreadComment,
  createThreadCommentReaction,
  updateThreadLog,
} from 'utils';
import {useSelector} from 'react-redux';
const useDetailThread = threadId => {
  const userData = useSelector(state => state.user.data);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]); // all comment from database
  const [commentLimit, setCommentLimit] = useState(10);
  const [comment, setComment] = useState(''); // current user comment state
  const [loadingSend, setLoadingSend] = useState(false);

  useEffect(() => {
    handleGetThreadComment();
    handleUpdateThreadLogView();
  }, [commentLimit]);

  const handleGetThreadComment = async () => {
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
    setLoadingSend(true);
    const response = await createThreadComment(threadId, {
      comment: comment,
    });
    if (response.request.status === 200) {
      setComments(comments => [...comments, response.data]);
      setComment('');
    } else {
      alert('Oops, Something went wrong. Please try again');
    }
    setLoadingSend(false);
  };

  const handleReactionThread = async (type, commentId) => {
    const response = await createThreadCommentReaction(threadId, commentId, {
      type: type,
    });
    if (response.request.status === 200) {

        let currentComment = comments.find(val => val.id === commentId);
        let currentCommentReaction = currentComment.reaction.find(val => val.type === type);
        const findCurrentUserId = currentComment.reaction.find(val => val.user_id.includes(userData.id));
        const findIndexReaction = currentComment.reaction.indexOf(findCurrentUserId);
        if (currentCommentReaction){
            currentCommentReaction.total = response.data.total;
            currentComment.reaction.splice(findIndexReaction, 1);
        } else {
            currentComment.reaction[findIndexReaction] = response.data;
            setCommentLimit(commentLimit + 1);
        }

    } else {
        alert('Opps, Something went wrong. Please try again');
    }

  };

  const handleUpdateThreadLogView = async () => {
    const response = await updateThreadLog(threadId);
    if (response.request.status === 200){
      console.log(response.data);
    }
  };

  return {
    loading,
    comments,
    handleLoadMoreComment,
    comment,
    setComment,
    handleSendComment,
    loadingSend,
    handleReactionThread,
  };
};

export default useDetailThread;

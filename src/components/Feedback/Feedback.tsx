import { useAppDispatch, useAppSelector } from "store/hooks"
import { feedbackSlice, feedbackSliceSelectors } from "store/redux/feedback/feedbackSlice"
import Button from "components/Button/Button";

import {
  FeedbackWrapper,
  FeedbackControl,
  Count,
  ButtonwithcountContainer,
} from "./styles";

function Feedback() {
  const dispatch = useAppDispatch();
  const { like, dislike } = useAppSelector(feedbackSliceSelectors.feedback);

  const onLike = () => dispatch(feedbackSlice.actions.plusLike());
  const onDislike = () => dispatch(feedbackSlice.actions.plusDislike());
  const resetResults = () => dispatch(feedbackSlice.actions.reset());

  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonwithcountContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonwithcountContainer>
        <ButtonwithcountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonwithcountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;


import { responseAnswersProgressInterface } from "./responseAnswersProgress,interface";
import { responseGroupsProgressInterface } from "./responseGroupsProgress.interface";
import { responseQuestionsProgressInterface } from "./responseQuestionsProgress.interface";

export class responseProgressDataInterface {
    groupsProgress: responseGroupsProgressInterface;
    answersProgress: responseAnswersProgressInterface;
    questionsProgress: responseQuestionsProgressInterface;
}

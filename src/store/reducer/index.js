import { SetUserInfo } from "../action";

export default (state, action) => {
  switch (action.type) {
    case SetUserInfo:
      console.log(555)
      return {
        userInfo: {
          name: action.userInfo
        },
        conut: 2
      };
    default:
      return state;
  }
};

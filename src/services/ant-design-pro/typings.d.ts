// @ts-ignore
/* eslint-disable */

declare namespace API {
  type IResponse = {
    code?: number;
    data?: string;
    msg?: string;
  };
  type CurrentUser = {
    username?: string;
    avatar?: string;
    id?: number;
    email?: string;
    isAdmin?: boolean;
    phone?: string;
    tag?: string;
    gender?: 'MALE' | 'FEMALE';
  };

  type LoginResult = {
    code?: number;
    data?: string;
    msg?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };


  type ILoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
  };


  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}

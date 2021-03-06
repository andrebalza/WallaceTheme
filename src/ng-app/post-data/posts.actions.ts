import { Action } from '@ngrx/store';
import { type } from '../app.util';
import { Post } from './posts.model';

export const ActionTypes = {
  SELECT_POST:   type('[Posts] Select Post'),
  LOAD_POST_PREVIEWS: type('[Posts] Load Posts'), 
  LOAD_POST_PREVIEWS_COMPLETE: type('[Posts] Load Posts Complete') ,
  ALL_POST_PREVIEWS_LOADED: type('[Posts] All Posts Loaded'),
  LOAD_POST_CONTENT: type('[Posts} Load Post Content')

};


export class SelectPostAction implements Action {
  type = ActionTypes.SELECT_POST;
  constructor(public payload: Post){}
}

export class LoadPostPreviewsAction implements Action {
	type = ActionTypes.LOAD_POST_PREVIEWS;
	constructor(public payload: {apiPage: number, getFeatured: boolean}) {}
}

export class LoadPostPreviewsCompleteAction implements Action {
	type = ActionTypes.LOAD_POST_PREVIEWS_COMPLETE;
	constructor(public payload: Post[]) {}
}

export class AllPostsLoadedAction implements Action {
  type = ActionTypes.ALL_POST_PREVIEWS_LOADED;
  constructor(public payload:null = null){}
  
}

export class LoadPostContentAction implements Action {
  type = ActionTypes.LOAD_POST_CONTENT;
  constructor(public payload: {id: string, content: string}) {}
}


export type Actions
  = SelectPostAction
  | LoadPostPreviewsAction
  | LoadPostPreviewsCompleteAction
  | AllPostsLoadedAction
  | LoadPostContentAction;

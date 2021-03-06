import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Request} from '../util/request';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient, private request: Request) {

  }

  public userId: string;

  /**
   * 是否登录
   */
  get isLogin(): string {
    return this.userId || localStorage.getItem('userId');
  }


  /**
   * 获取文章列表
   */
  getArticleList(pageSize: number, currentPage: number): any {

    return this.request.post('articleList', {
      pageSize, currentPage
    });

  }

  /**
   * 发表文章
   * @param user_id   用户id
   * @param title     文章标题
   * @param content    文章内容
   * @param labels    标签列表
   * @param sketch    文章简述
   */
  publishArticle(
    user_id: string, title: string, content: string,
    labels: string[], sketch: string
  ): Observable<any> {

    return this.request.post('addArticle', {
      user_id, title, content, labels, sketch
    });


  }


  /**
   * 获取文章
   * @param article_id
   */
  getArticleById(article_id: number): Observable<any> {
    return this.request.post('getArticleById', {article_id});

  }

  commend(article_id: number) {

    return this.request.post('commend', {article_id});

  }

  /**
   * 获取最热文章列表
   */
  getHotList() {

    return this.request.get('hotArticleList');
  }


  /**
   * 获取用户资料
   * @param uid
   */
  getAuthorInfo(uid: number): Observable<any> {
    return this.request.post('aboutAuthor', {
      uid
    });
  }


  getAllLabels(): Observable<any> {
    return this.request.post('getAllLabels');
  }

  login(username: string, password: string) {
    return this.request.post('login', {
      username, password
    });
  }

  loginOUt(): Observable<any> {
    return this.request.post('loginOut');
  }

  /**
   * 获取评论列表
   * @param article_id
   */
  getComments(article_id: number) {
    return this.request.post('getComments', {article_id});
  }


  /**
   * 添加评论
   * @param uid
   * @param article_id
   * @param c_content
   */
  addComments(uid: number, article_id: number, c_content: string) {
    return this.request.post('addComment', {
      uid, article_id, c_content
    });
  }

  /**
   * 获取回复列表
   * @param comment_id
   */
  getReplyList(comment_id: number) {
    return this.request.post('getAllReply', {
      comment_id
    });
  }


  /**
   * 添加回复
   * @param uid
   * @param comment_id
   * @param reply_content
   * @param reply_to_uid
   */
  addReply(uid: number, comment_id: number, reply_content: string, reply_to_uid: number) {
    return this.request.post('addReply', {
      uid, comment_id, reply_content, reply_to_uid
    });

  }

}

import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  private data: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.data = new BehaviorSubject<any>(null);
  }

  initializeRepoData = () => {
    if (!this.data.value) {
      return this.http.post(environment.gitHubAPI,
        JSON.stringify({
          query: `
          {
           user(login:"${'Rinkaswiftie'}") {
               pinnedItems(first: 6, types: [REPOSITORY]) {
                totalCount
                edges {
                node {
                ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}`
        }),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: environment.gitHubToken
          })
        }).subscribe((res: any) => {
        this.data.next(res.data.user.pinnedItems.edges);
      });
    }
  };

  getData() {
    return this.data;
  }
}

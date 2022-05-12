function setText(xpath: string, text: string): void {
  const element = document
    .evaluate(
      xpath,
      document,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    )
    .snapshotItem(0) as HTMLElement;
  console.log(element, text);
  element.innerHTML = text;
}

type RepositoryPageElement = {
  tabs: {
    code: any;
    issues: any;
    pullRequests: any;
    actions: any;
    projects: any;
    security: any;
    insights: any;
    settings: any;
  };
};

const tabs: RepositoryPageElement["tabs"] = {
  code: document.getElementById("code-tab"),
  issues: document.getElementById("issues-tab"),
  pullRequests: document.getElementById("pull-requests-tab"),
  actions: document.getElementById("actions-tab"),
  projects: document.getElementById("projects-tab"),
  security: document.getElementById("security-tab"),
  insights: document.getElementById("insights-tab"),
  settings: document.getElementById("settings-tab"),
};

window.addEventListener("load", () => {
  tabs.code.querySelector("span").innerHTML = "コード";
  tabs.issues.querySelector("span").innerHTML = "課題";
  tabs.pullRequests.querySelector("span").innerHTML = "プルリクエスト";
  tabs.actions.querySelector("span").innerHTML = "アクション";
  tabs.projects.querySelector("span").innerHTML = "プロジェクト";
  tabs.security.querySelector("span").innerHTML = "セキュリティ";
  tabs.insights.querySelector("span").innerHTML = "インサイト";
  tabs.settings.querySelector("span").innerHTML = "設定";

  // setText(
  //   "/html/body/div[5]/div/main/div[2]/div/div/div[3]/div[1]/div[2]/span/get-repo/feature-callout/details/div/div/div[1]/ul/li[1]/div",
  //   "クローン"
  // );

  setText(
    "/html/body/div[5]/div/main/div[2]/div/div/div[3]/div[2]/div/div[1]/div/h2",
    "このリポジトリについて"
  );

  // setText(
  //   "/html/body/div[5]/div/main/div[2]/div/div/div[3]/div[2]/div/div[2]/div/h2/a",
  //   "リリース"
  // );

  // setText(
  //   "/html/body/div[5]/div/main/div[2]/div/div/div[3]/div[2]/div/div[6]/div/h2",
  //   "使用している言語"
  // );
});

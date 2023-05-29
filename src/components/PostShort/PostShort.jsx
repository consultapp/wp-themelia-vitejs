import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function PostShort({ isLoading, post }) {
  if (isLoading) return <Loading />;
  if (!post) return <div>Error???</div>;

  const { id, excerpt, slug, title, link } = post;
  const postTitle = title?.rendered || "";
  const postExcerpt = excerpt.rendered;

  return (
    <div
      id={id}
      className="entry author-consultapp post-1543 post type-post status-publish format-standard has-post-thumbnail category-stati"
      itemScope="itemScope"
      itemType="http://schema.org/BlogPosting"
      itemProp="blogPost"
    >
      <header className="entry-header">
        <h2 className="entry-title font-headlines" itemProp="headline">
          <Link to={`/${slug}`} rel="bookmark" itemProp="url">
            {postTitle}
          </Link>
        </h2>
      </header>
      <div className="entry-summary" itemProp="description">
        <p>{postExcerpt}</p>
        <Link to={`/${slug}`} className="entry-more-link">
          <span>Читать далее</span>
          <span className="screen-reader-text">{postTitle}</span>
        </Link>
      </div>
    </div>
  );
}

// [
//   {
//       "id": 1543,
//       "date": "2022-07-07T17:31:43",
//       "modified": "2023-01-11T13:49:31",
//       "slug": "%d0%ba%d0%b0%d0%ba-%d1%83%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%b8%d1%82%d1%8c-gh-%d0%bd%d0%b0-centos7-c-yum",
//       "type": "post",
//       "excerpt": {
//           "rendered": "<p>Тут самое интересное, что именно с yum будут максимальные проблемы с репозиториями и на наш взгляд проще всего установить gh из .rpm файла. Переходим на сайт https://github.com/cli/cli/releases, ищем необходимый нам пакет и копируем ссылку, в нашем случае это был gh_2.13.0_linux_386.rpm. Скачиваем файл в любую доступную для записи папку и запускаем узтановку из пакета .rpm коммандой&hellip;</p>\n <a href=\"https://consultapp.ru/%d0%ba%d0%b0%d0%ba-%d1%83%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%b8%d1%82%d1%8c-gh-%d0%bd%d0%b0-centos7-c-yum/\" title=\"Как установить gh на CentOS7 c yum?\" class=\"entry-more-link\"><span>Читать далее</span> <span class=\"screen-reader-text\">Как установить gh на CentOS7 c yum?</span></a>",
//           "protected": false
//       },
//       "categories": [
//           6
//       ],
//       "_links": {
//           "self": [
//               {
//                   "href": "https://consultapp.ru/wp-json/wp/v2/posts/1543"
//               }
//           ],
//           "collection": [
//               {
//                   "href": "https://consultapp.ru/wp-json/wp/v2/posts"
//               }
//           ],
//           "about": [
//               {
//                   "href": "https://consultapp.ru/wp-json/wp/v2/types/post"
//               }
//           ],
//           "author": [
//               {
//                   "embeddable": true,
//                   "href": "https://consultapp.ru/wp-json/wp/v2/users/1"
//               }
//           ],
//           "replies": [
//               {
//                   "embeddable": true,
//                   "href": "https://consultapp.ru/wp-json/wp/v2/comments?post=1543"
//               }
//           ],
//           "version-history": [
//               {
//                   "count": 3,
//                   "href": "https://consultapp.ru/wp-json/wp/v2/posts/1543/revisions"
//               }
//           ],
//           "predecessor-version": [
//               {
//                   "id": 1551,
//                   "href": "https://consultapp.ru/wp-json/wp/v2/posts/1543/revisions/1551"
//               }
//           ],
//           "wp:featuredmedia": [
//               {
//                   "embeddable": true,
//                   "href": "https://consultapp.ru/wp-json/wp/v2/media/1546"
//               }
//           ],
//           "wp:attachment": [
//               {
//                   "href": "https://consultapp.ru/wp-json/wp/v2/media?parent=1543"
//               }
//           ],
//           "wp:term": [
//               {
//                   "taxonomy": "category",
//                   "embeddable": true,
//                   "href": "https://consultapp.ru/wp-json/wp/v2/categories?post=1543"
//               },
//               {
//                   "taxonomy": "post_tag",
//                   "embeddable": true,
//                   "href": "https://consultapp.ru/wp-json/wp/v2/tags?post=1543"
//               }
//           ],
//           "curies": [
//               {
//                   "name": "wp",
//                   "href": "https://api.w.org/{rel}",
//                   "templated": true
//               }
//           ]
//       }
//   },
// }

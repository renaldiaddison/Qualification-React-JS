import { gql } from "@apollo/client/core"

export const ALL_ANIME = gql`
query getAnimeList($page:Int, $perPage: Int){
    Page(page:$page, perPage:$perPage){
      media(type: ANIME, sort: TRENDING_DESC){
        id
        title{
          romaji
        }
              coverImage{
          large
        }
        description
      }
    }
  }
`

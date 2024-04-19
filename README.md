

Packages : @auth/prisma-adapter @mantine/core @mantine/hooks @prisma/client @tabler/icons-react clsx next-auth query-string stripe prisma ts-node postcss postcss-preset-mantine @faker-js/faker postcss-simple-vars 

Note : // for sqlite 'npx prisma migrate dev --name init' is nesesory after db push becouse sqlite do not automaticlly  create table this cause error in prisa studio while finding enterys without table


=> Schema : 

    -> Models   : 
      user - id, name, email, emailVerified, image
      acount - id, userId, type, provider, providerAccountId, refresh_token, access_token, 
                expires_at, token_type, scope, id_token, session_state
      Product - id, title, description, badge, price, availableON
      links - id, imgUrl, visitLink, shareLink, saveLink
      tags - id, tag, link, icon
      category - id, rank, label, link, icon

    -> Relations
      user - products : Product[] 1-m, acounts : Account[], 1-m
      product - links : Link? 1-1 , category : Categoty? 1-m , tags : Tag[] m-m ,  
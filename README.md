# internationalization-routes

### Summary
Implement internationalization routes that support SEO

Attention:

- When I change the language from the dropdown menu, I need to reload the page because I need to refetch the page document to see the new language chosen as a new lang in HTML.
- I use middleware to redirect to the language path based on the language chosen and to set up cookies lang=${selectedLocale} in the NextResponse.
- I use window.location.href to navigate when changing the dropdown language due to refetching the page document needed.



https://github.com/user-attachments/assets/bbf2879a-f7d6-4aae-bf8e-1e8394004745


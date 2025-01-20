"use strict";(self.webpackChunkportfolio_site=self.webpackChunkportfolio_site||[]).push([[130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"youtube_content_creator","metadata":{"permalink":"/blog/youtube_content_creator","source":"@site/blog/2023-05-14-YouTube-Content-Generator/index.md","title":"Creating Videos from Reddit Posts and Comments","description":"A Deep Dive into an AI-Powered Project","date":"2023-05-14T00:00:00.000Z","tags":[],"readingTime":4.92,"hasTruncateMarker":true,"authors":[{"name":"Nathan Spelts","title":"Software Engineer @ Hyster-Yale Materials Handling","url":"https://github.com/FashionablyNate","page":{"permalink":"/blog/authors/nspelts"},"socials":{"github":"https://github.com/FashionablyNate"},"imageURL":"https://github.com/FashionablyNate.png","key":"nspelts"}],"frontMatter":{"slug":"youtube_content_creator","title":"Creating Videos from Reddit Posts and Comments","authors":["nspelts"],"tags":[]},"unlisted":false,"nextItem":{"title":"ASR Capstone at Seasalt AI","permalink":"/blog/capstone_seasalt_ai"}},"content":"A Deep Dive into an AI-Powered Project\\n\\n\x3c!-- truncate --\x3e\\n\\n## Introduction\\nIn this blog post, we will explore an intriguing project that utilizes AI and various libraries to create engaging videos from Reddit posts and comments. The project\'s main goal is to transform text-based content into visually appealing videos by combining Playwright for web scraping, moviepy for video editing, and SQLite for data management. Let\'s dive into the details and discover what makes this project interesting and valuable.\\n\\n[Source code can be found here.](https://github.com/FashionablyNate/yt_content_creator)\\n \\n## Project Overview\\nThe main.py file serves as the entry point for the project. It imports necessary libraries and modules, such as dataclasses, os, asyncio, knapsack, shutil, and several custom modules. The script then defines a Content data class and initializes a content_dict dictionary to store content information.\\n\\nThe project\'s workflow starts by connecting to the Reddit API using the Reddit wrapper module. It retrieves posts from a specific subreddit and iterates through each post. If a video for a particular post doesn\'t already exist, the script proceeds to create content for that post.\\n\\nThe create_content_post() function generates audio and captures a screenshot of the post using the take_screenshot_post() function. The resulting content is stored as a Content object in the content_dict dictionary.\\n\\nIf the post\'s audio duration is longer than 60 seconds, the script inserts the video into a database and removes the generated content directories. Otherwise, it proceeds to process the comments associated with the post.\\n\\nFor each comment, the script creates content using the create_content_comment() function, which generates audio and captures a screenshot of the comment using the take_screenshot_comment() function. The resulting content is stored in the content_dict dictionary, along with duration, upvotes, and comment IDs.\\n\\nTo optimize the selection of comments, the script uses the knapsack algorithm to find the best combination of comments based on duration and upvote count. Once the selection is made, it creates a video by combining the post content and selected comments using the create_video() function.\\n\\nThe video is then uploaded to YouTube using the get_authenticated_service() and initialize_upload() functions from the upload_video module. Finally, the generated video is saved to the output_video.mp4 file.\\n\\nOther modules in the project include take_screenshot.py, which uses the Playwright library to capture screenshots of posts and comments on Reddit, and create_video.py, which handles the video creation process, including audio synthesis and video editing.\\n\\n## Key Features and Technologies:\\n\\n- Web Scraping with Playwright: The project leverages Playwright to scrape Reddit posts and comments and capture their visual representation.\\n- Text-to-Speech (TTS) Synthesis: The TTS library is used to convert text content into synthesized audio, enhancing the user experience when watching the videos.\\n- Video Editing with Moviepy: Moviepy, a Python library for video editing, enables the combination of audio, images, and video clips to create compelling and dynamic video content.\\n- Knapsack Algorithm: The knapsack algorithm is employed to select the most suitable comments based on their duration and upvote count, ensuring an optimal combination for the final video.\\n- SQLite Database: The project utilizes an SQLite database to store video IDs, ensuring that duplicate videos are not generated for the same Reddit post.\\n\\n## Conclusion:\\nThe project presented here showcases the integration of various technologies and libraries to automate the process of transforming text-based Reddit content into visually engaging videos. By leveraging AI, web scraping, text-to-speech synthesis, video editing, and database management, the project demonstrates the power of Python for content creation and automation.\\n\\nThe ability to convert text content into multimedia videos not only enhances the user experience but also opens up opportunities for content creators to repurpose existing textual content and reach a wider audience through visual storytelling.\\n\\nWith further refinement and customization, this project could be expanded to support different platforms, integrate additional AI capabilities such as sentiment analysis or image recognition, and provide more advanced video editing features.\\n\\nOne interesting aspect of this project is the combination of different libraries and tools to achieve the desired outcome. Playwright, a powerful web scraping library, enables the script to interact with Reddit\'s web interface and capture screenshots of posts and comments. By leveraging Playwright\'s capabilities, the project extracts the visual content necessary for video creation.\\n\\nThe integration of TTS technology adds another layer of engagement to the videos. By synthesizing the text content into audio, the project brings the posts and comments to life, enabling users to consume the content in a more immersive way. This demonstrates the potential of TTS in enhancing multimedia experiences and making content more accessible to a broader audience.\\n\\nMoviepy, a versatile video editing library, plays a crucial role in combining audio, images, and video clips to create the final videos. It provides a user-friendly and intuitive interface for video composition, allowing for seamless integration of different media elements. The project showcases how Moviepy can be utilized to automate the video editing process and produce professional-looking videos.\\n\\nThe implementation of the knapsack algorithm introduces an element of optimization to the project. By selecting the most suitable comments based on their duration and upvote count, the algorithm ensures that the final video maintains an optimal length and includes the most relevant and popular comments. This demonstrates how algorithmic techniques can be applied to content curation and enhance the quality of the generated videos.\\n\\nFurthermore, the use of an SQLite database for video ID management adds a layer of data persistence and ensures that duplicate videos are not generated for the same Reddit post. This highlights the importance of data management and provides a foundation for scalability and future enhancements, such as tracking video analytics or managing user preferences.\\n\\nOverall, this project showcases the power of Python and its ecosystem of libraries and tools in automating content creation and transforming text-based content into visually appealing videos. By leveraging AI, web scraping, text-to-speech synthesis, video editing, and database management, the project opens up possibilities for innovative content generation and storytelling."},{"id":"capstone_seasalt_ai","metadata":{"permalink":"/blog/capstone_seasalt_ai","source":"@site/blog/2023-04-11-Capstone-Seasalt-AI/index.md","title":"ASR Capstone at Seasalt AI","description":"Machine learning project that performs automated speech recognition on Indonesian and Spanish","date":"2023-04-11T00:00:00.000Z","tags":[],"readingTime":2.155,"hasTruncateMarker":true,"authors":[{"name":"Nathan Spelts","title":"Software Engineer @ Hyster-Yale Materials Handling","url":"https://github.com/FashionablyNate","page":{"permalink":"/blog/authors/nspelts"},"socials":{"github":"https://github.com/FashionablyNate"},"imageURL":"https://github.com/FashionablyNate.png","key":"nspelts"}],"frontMatter":{"slug":"capstone_seasalt_ai","title":"ASR Capstone at Seasalt AI","authors":["nspelts"],"tags":[]},"unlisted":false,"prevItem":{"title":"Creating Videos from Reddit Posts and Comments","permalink":"/blog/youtube_content_creator"},"nextItem":{"title":"CANG Physics Simulator","permalink":"/blog/cang_physics_simulator"}},"content":"Machine learning project that performs automated speech recognition on Indonesian and Spanish\\n\\n\x3c!-- truncate --\x3e\\n\\nIt\u2019s been nearly a year since my last post, but I\u2019m excited to share details about my latest project! As I approach the end of my senior year at WSU, I\u2019ve spent the entire year working on a capstone project in collaboration with [Seasalt AI](https://seasalt.ai/). Our work has focused on two tasks: developing an Indonesian model from scratch during the first semester, and retraining Seasalt AI\u2019s existing Spanish model this semester.\\n\\n## Indonesian Model\\nThe process of building a model from scratch began with locating an open-source corpus containing segmented audio files and time-stamped captions. We utilized this corpus to train our initial model using [Kaldi](https://kaldi-asr.org/), an open-source ASR project. The training pipeline involves normalizing the data, extracting mel frequency cepstral coefficients (MFCC) to facilitate approximation and save space, and generating statistical models to make assumptions about the data. Subsequently, the data undergoes monophone training, which examines individual phonemes, followed by triphone training that considers neighboring phonemes for context. Additional steps include speaker normalization, adapting the model to a specific individual\u2019s voice, and reducing the impact of background noise. Lastly, the model is fine-tuned via time-delayed neural network training, resulting in a baseline Indonesian speech-to-text model.\\n\\n## Spanish Model\\n\\n### Data Crawling\\nFor the Spanish model, we began with a provided baseline model. Our primary task was to gather data and use it to retrain this baseline model. We downloaded thousands of hours of YouTube audio and captions using the youtube-dl Python library, with our chosen keywords guiding the crawling process. We developed a script that took these keywords, located videos with Spanish captions, and downloaded all videos from channels containing those keywords. This data was then converted into a Kaldi-compatible dataset.\\n\\n### Data Validation\\nWe proceeded to validate the data using our model. This involved creating smaller datasets, each containing around 50 hours of audio, and employing the model to confirm the presence of actual Spanish audio. The model assessed the word error rate between the audio and existing captions. The outcome was a condensed list of segments and Kaldi data suitable for retraining the model.\\n\\n### Model Retraining\\nFinally, we used the validated data to retrain the baseline model. This relatively straightforward process involved running scripts to enhance the model using the validated data.\\n\\n## Conclusion\\nThis project has been an invaluable learning experience in machine learning, speech recognition, and working within a corporate environment. It has significantly contributed to my growth as a programmer, honing my skills in Python, Bash, and command-line operations."},{"id":"cang_physics_simulator","metadata":{"permalink":"/blog/cang_physics_simulator","source":"@site/blog/2022-05-02-CANG-Phys-Sim/index.md","title":"CANG Physics Simulator","description":"A physics simulator created from scratch. Written in C++ using OpenGL and GLFW.","date":"2022-05-02T00:00:00.000Z","tags":[],"readingTime":4.385,"hasTruncateMarker":true,"authors":[{"name":"Nathan Spelts","title":"Software Engineer @ Hyster-Yale Materials Handling","url":"https://github.com/FashionablyNate","page":{"permalink":"/blog/authors/nspelts"},"socials":{"github":"https://github.com/FashionablyNate"},"imageURL":"https://github.com/FashionablyNate.png","key":"nspelts"}],"frontMatter":{"slug":"cang_physics_simulator","title":"CANG Physics Simulator","authors":["nspelts"],"tags":[]},"unlisted":false,"prevItem":{"title":"ASR Capstone at Seasalt AI","permalink":"/blog/capstone_seasalt_ai"}},"content":"A physics simulator created from scratch. Written in C++ using OpenGL and GLFW.\\n\\n\x3c!-- truncate --\x3e\\n\\nWelcome to my first post on my new blog! I\'m just about finished up with my junior year in the computer science sequence at Washington State University, and I wanted to talk about my semester project I just presented.\\n\\nWe were allowed to choose any project we wanted, as long as the scope was large enough. So I convinced some of my friends to create something akin to [powder game](https://dan-ball.jp/en/javagame/dust/). I always loved that game as a kid, and was also always curious how it worked under the hood. I\'ve got a lot of interest in low level graphics rendering as well, mainly due to [this video](https://www.youtube.com/watch?v=4O0_-1NaWnY) where [jdh](https://www.youtube.com/channel/UCUzQJ3JBuQ9w-po4TXRJHiA) creates minecraft using C and OpenGL in 48 hours. So naturally, I convinced everyone to use OpenGL for our physics simulator. It felt like we bit off more than we could chew at times, but ultimately the project turned out really cool and I\'m extremely proud of it.\\n\\n### Time for some technical details for those interested.\\n\\nMy biggest contributions to the project were:\\n- Creating the infrastructure for drawing things to the screen\\n- Liquid, Gas, and Solid collisions\\n- State transitions\\n\\n#### Drawing infrastructure\\n\\nThis part was extrememly tricky and completely new territory for me. I\'d experimented with drawing single triangles to the screen, and rendering some 3d shapes. For example:\\n\\n<iframe width=\\"450\\" height=\\"200\\" src=\\"/videos/openglmeme3.mp4\\" title=\\"Cubes rotating\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>\\n<a href=\\"openglmeme3.mp4\\"/>\\n\\nBut I\'d never attempted anything where new objects were bring drawn on the fly. Thankfully, on the [site](https://learnopengl.com/) where I\'ve learned everything I know about OpenGL, there\'s a tutorial on how to create breakout! So I followed the [tutorial](https://learnopengl.com/In-Practice/2D-Game/Breakout) and extracted the information I needed to accomplish what I wanted to. Unfortunately this code I got from the tutorial didn\'t count towards my line requirement on the project, but I learned a ton so the time wasn\'t entirely wasted.\\n\\n#### Liquid, Gas, and Solid collisions\\n\\nThis part of the project I can say with confidence that I thought through it and implemented it all on my own. Unfortunately that means making a lot of mistakes along the way. I\'m going to skip all the things I tried that didn\'t work, and get straight to what did work. I ended up creating a double array of entities, an entity being a number that is unique to a particle drawn on the screen. Each entity stores it\'s own components that determine how it should behave. I created a liquid component, gas component, gravity component etc.\\n\\n<iframe width=\\"450\\" height=\\"200\\" src=\\"/videos/gravity.mp4\\" title=\\"Gravity demonstration\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>\\n<a href=\\"gravity.mp4\\"/>\\n\\n*A demonstration of gravity*\\n\\nThen I wrote rules for what should happen to an entity with a specific component, like the gravity component for example. When a particle has the gravity component, and there\'s not a valid entity in the space below it, it moves down. But if the particle encounters another particle with the border component, it stops moving down. The grid allowed me to check the immediate surroundings of a particle wherever it was, which kept things from getting bogged down too much. From there I started writing a liquid algorithm.\\n\\n*A demonstration of water*\\n\\nI tried many things to get realistic behaving water, and what I found to be the most effective was random movement. Every water particle chooses a random number between 0 and 99, if that number is odd it moves left, if it\'s even it moves right. The amount the particle moves is dependent on the size of the number chosen. As simple as this is, it took a long time to figure out!\\n\\n*A demonstration of steam*\\n\\nSteam was fairly simple to figure out, it chooses a random number similarly to water and slowly moves to the left or right as it ascends. Once it reaches a solid object, there\'s a probability that it will condense back into water every few seconds.\\n\\n#### State Transitions\\n\\nThis part was my favorite because it was so simple. Once I had collisions and drawing particles all set up, turning one entity into another was as simple as taking away one component and adding another. There\'s water touching lava? Turn the lava into stone and turn the water into steam! The possibilities for things that could be added are endless. Of course, by the time I got into the stage where I was just adding fun things, I ran out of time unfortunately. But I managed to add water, ice, steam, lava, fire, and stone. I also added birds as my last contribution to the project. I was able to implement them via Boid\'s algorithm, courtesy of [Ben Eater](https://eater.net/boids).\\n\\n*A demonstration of birds*\\n\\nI had a lot of fun with this project and learned a lot about working with others. I feel like I didn\'t get too technical with my explanations. If you think it was too technical or not technical enough, go ahead and send me an <a href=\\"mailto: nate@nathanspelts.com\\">email</a> and tell me about it! Even if you don\'t have a specific comment, I\'d love to hear that someone actually read this and enjoyed it! Thanks for your time. :)"}]}}')}}]);
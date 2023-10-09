# QTIM - The Quantitative Translational Imaging in Medicine Lab at the Martinos Center

<img src="https://qtim-lab.github.io/images/Full_Lab_Picture.png">
<em>Missing: Samarth, Sunakshi, Kathi, and Alton.</em>
<br />
<br />

Our lab focuses on developing quantitative imaging biomarkers for cancer and other diseases using advanced imaging techniques and machine learning methods. We are comprised of computer science researchers, medical physicists, neuro-oncologists, and MRI technicians, and we are always looking to colloborate with experts outside of our field. We have recently worked to apply deep learning methods to a variety of diseases, and our goal is to unite the cutting edges of machine learning, medical oncology, and image analysis into practical clinical applications.
<br />
<br />

Read about our lab members on the <a href="{{ site.baseurl }}/people"/>People</a> tab. Learn more about our specific research topics on the <a href="{{ site.baseurl }}/research">Research</a> tab. See our recent publications on the <a href="{{ site.baseurl }}/publications">Publications</a> tab, job openings on the <a href="{{ site.baseurl }}/jobs">Jobs</a> tab, and find a way to get in touch on the <a href="{{ site.baseurl }}/contact">Contact</a> tab. Last but not least, check the <a href="{{ site.baseurl }}/fun">Fun</a> tab to see some pictures of our lab members doing what we do best.

## Developers Note:
```bash
# Git Clone
cd ~ # Or somewhere else
git clone git@github.com:QTIM-Lab/qtim-lab.github.io.git

# Make sure you have ruby and jekyll installed:
https://jekyllrb.com/docs/installation/ubuntu/

# Install gems:
bundle install

# Serve the website:
bundle exec jekyll serve

# Ex
bbearce@pop-os:~/Documents/qtim-lab.github.io$ bundle exec jekyll serve;
Configuration file: /home/bbearce/Documents/qtim-lab.github.io/_config.yml
To use retry middleware with Faraday v2.0+, install `faraday-retry` gem
   GitHub Metadata: site.name is set in _config.yml, but many plugins and themes expect site.title to be used instead. To avoid potential inconsistency, Jekyll GitHub Metadata will not set site.title to the repository's name.
            Source: /home/bbearce/Documents/qtim-lab.github.io
       Destination: /home/bbearce/Documents/qtim-lab.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
       Jekyll Feed: Generating feed for posts
                    done in 3.844 seconds.
/home/bbearce/gems/gems/pathutil-0.16.2/lib/pathutil.rb:502: warning: Using the last argument as keyword parameters is deprecated
 Auto-regeneration: enabled for '/home/bbearce/Documents/qtim-lab.github.io'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```
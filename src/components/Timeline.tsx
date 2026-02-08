import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2025 – Present"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer (Affiliate)</h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>
            <p>Building vision-based ML systems with retrieval and multi-agent pipelines to automatically grade and correct open-ended handwritten and visual math responses at scale.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="May 2025 – Aug 2025"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Startup Founder (Create-X)</h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>
            <p>Launched an AI platform for privacy-first analysis of open-ended survey feedback. Shipped end-to-end ML pipelines that cut analysis from weeks to minutes; validated with 30+ customer interviews and 1,500+ at Create-X Demo Day.</p>
            <p>Won 1st prize at CRIDC 2025 Innovation Competition and advanced to Quadrant-I Startup Launch with $10K in funding and external grants (including Georgia Research Alliance and Georgia AI for Manufacturing); filed a provisional patent.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2024 – May 2025"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Generative AI Researcher (Team Lead)</h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>
            <p>Led work on resource-efficient diffusion models, cutting VRAM from 16GB+ to 8GB so low-resource labs could run state-of-the-art generative models.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="May 2024 – Dec 2024"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">NLP Project Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>
            <p>Shipped an NLP service for real-time survey categorization. Halved processing time for 2K+ students and cut false positives by ~20% through iterative feedback.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2022 – June 2023"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Vision Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Space Applications Centre (SAC), ISRO, India</h4>
            <p>Built a real-time wildfire detection system from 200GB+ Landsat-8 imagery using semantic segmentation (~97% recall). Optimized for edge: 2.5× lower power (1–1.6W) via quantization and pruning on ZCU104.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jul 2022 – Aug 2022"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Physical Research Laboratory, India</h4>
            <p>Researched autoencoder-based anomaly detection on CERN/LHC-style data, studying how reconstruction errors behave across data manifolds.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jun 2021 – Jul 2021"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Vellore Institute of Technology (VIT), India</h4>
            <p>Delivered 95.87% accuracy for ocular disease classification via optimized federated learning (FL) on non-IID data, while reducing FL vs. centralized gap to 0.33% (PyTorch/Flower) and preserving data privacy.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

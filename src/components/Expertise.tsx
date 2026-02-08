import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faWandMagicSparkles, faCloud, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const programmingLabels = [
  "Python",
  "C++",
  "Java",
  "MySQL",
  "MongoDB",
  "R",
  "MATLAB",
];

const mlLabels = [
  "PyTorch",
  "TensorFlow",
  "Keras",
  "Scikit-Learn",
  "XGBoost",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "OpenCV",
  "GDAL",
  "Rasterio",
];

const genAiLabels = [
  "LangChain",
  "LangGraph",
  "OpenAI SDK",
  "RAG",
  "LlamaIndex",
  "Pydantic",
  "CrewAI",
  "Ollama",
  "Prompt Engineering",
  "NLTK",
  "spaCy",
  "Hugging Face",
  "Weaviate",
  "ChromaDB",
  "FAISS",
];

const cloudDevOpsLabels = [
  "AWS",
  "GCP",
  "Azure",
  "Azure Databricks",
  "Docker",
  "CI/CD",
  "Git",
  "Linux",
  "Apache Spark",
  "FastAPI",
  "asyncio",
];

const softwareLabels = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Streamlit",
  "React",
  "Django",
  "Flask",
  "Agile",
  "Jira",
];

const hardwareLabels = [
  "GPU Programming",
  "Xilinx-Vitis",
  "GROQ",
  "Compression & Quantization",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Programming</h3>
            <p>Strong foundation in multiple languages for research, automation, and production systems.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {programmingLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>Machine Learning & AI</h3>
            <p>Building and deploying scalable ML systems—from classical models to deep learning and resource-efficient inference.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {mlLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faWandMagicSparkles} size="3x" />
            <h3>Generative AI, NLP & Agents</h3>
            <p>Fine-tuning LLMs, RAG pipelines, multi-agent systems, and AI-powered tools with LangChain, LangGraph, and OpenAI.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {genAiLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Data, Cloud & DevOps</h3>
            <p>End-to-end pipelines, visualization, and deployment on AWS, GCP, and Azure with Docker and CI/CD. Hardware optimization for edge and low-resource deployment.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {cloudDevOpsLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
              {hardwareLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Software Development</h3>
            <p>Full-stack and rapid prototyping with Streamlit, web technologies, and agile methodologies.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {softwareLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

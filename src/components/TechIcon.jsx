import React from 'react';
import {
  Database,
  Brain,
  Cpu,
  BarChart2,
  BarChart3,
  LineChart,
  PieChart,
  Table,
  Eye,
  Cloud,
  Zap,
  Layers,
  Activity,
  Globe,
  Code2,
  Terminal,
  Bot,
  FileSpreadsheet,
  FileText,
  GitBranch,
  Boxes,
  Sparkles,
  Video,
  Palette,
  Atom,
  Workflow,
  CheckCircle2,
  Flame,
  Binary
} from 'lucide-react';

export const TechIcon = ({ name, className = "w-3.5 h-3.5" }) => {
  const normalized = name.toLowerCase().trim();

  // Python
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.813v.828H3.88s-3.88.44-3.88 5.812c0 5.374 3.39 5.234 3.39 5.234h2.025v-2.836s-.11-3.39 3.328-3.39h5.71v-.867s.484-5.5-2.54-5.5zm-2.457 1.766a1.01 1.01 0 11.002 2.02 1.01 1.01 0 01-.002-2.02zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.813v-.828h8.139s3.88-.44 3.88-5.812c0-5.374-3.39-5.234-3.39-5.234h-2.025v2.836s.11 3.39-3.328 3.39h-5.71v.867s-.484 5.5 2.54 5.5zm2.457-1.766a1.01 1.01 0 11-.002-2.02 1.01 1.01 0 01.002 2.02z" />
      </svg>
    );
  }

  // React
  if (normalized === 'react') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" />
        <path d="M12 1.75c-3.1 0-5.7 4.14-5.7 9.25s2.6 9.25 5.7 9.25 5.7-4.14 5.7-9.25-2.6-9.25-5.7-9.25zm0 17.5c-2.43 0-4.4-3.69-4.4-8.25s1.97-8.25 4.4-8.25 4.4 3.69 4.4 8.25-1.97 8.25-4.4 8.25z" transform="rotate(30 12 12)" />
        <path d="M12 1.75c-3.1 0-5.7 4.14-5.7 9.25s2.6 9.25 5.7 9.25 5.7-4.14 5.7-9.25-2.6-9.25-5.7-9.25zm0 17.5c-2.43 0-4.4-3.69-4.4-8.25s1.97-8.25 4.4-8.25 4.4 3.69 4.4 8.25-1.97 8.25-4.4 8.25z" transform="rotate(-30 12 12)" />
      </svg>
    );
  }

  // JavaScript
  if (normalized === 'javascript' || normalized === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M3 3h18v18H3V3zm13.7 13.9c-.8.5-1.7.8-2.6.8-1.9 0-3.1-1-3.1-2.9v-4.1h1.8v4.1c0 .9.5 1.4 1.4 1.4.6 0 1.1-.2 1.5-.5v1.2zm3.3-1.6c-.6.9-1.5 1.5-2.6 1.5-1.8 0-2.8-1.1-2.8-2.6 0-1.8 1.3-2.6 3.1-2.7l.5-.03v-.3c0-.7-.4-1.2-1.3-1.2-.7 0-1.3.3-1.7.8l-1.1-1c.7-.9 1.7-1.4 2.9-1.4 2 0 3 1.1 3 2.9v4h-1.8v-.6z" />
      </svg>
    );
  }

  // HTML5
  if (normalized.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 2l1.8 17.4L12 22l7.2-2.6L21 2H3zm14.6 5.5l-.2 2.2H9.2l.2 2.2h7.8l-.6 6.1-4.6 1.3-4.6-1.3-.3-3.7h2.2l.2 1.9 2.5.7 2.5-.7.3-3.1H6.7L6 4.3h12l-.4 3.2z" />
      </svg>
    );
  }

  // CSS3
  if (normalized.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 2l1.8 17.4L12 22l7.2-2.6L21 2H3zm14.8 5.7h-9.9l.2 2.3h9.5l-.8 7.8-4.8 1.4-4.8-1.4-.3-3.6h2.2l.2 1.8 2.7.8 2.7-.8.3-3.3H6.8L6.2 4.5h12l-.4 3.2z" />
      </svg>
    );
  }

  // Java
  if (normalized === 'java') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.8 16.5c0 1.2 3.2 2.2 7.2 2.2 4 0 7.2-1 7.2-2.2v-2.3c-1.5 1-4.2 1.6-7.2 1.6s-5.7-.6-7.2-1.6v2.3zm0-4.3c0 1.2 3.2 2.2 7.2 2.2 4 0 7.2-1 7.2-2.2V9.9c-1.5 1-4.2 1.6-7.2 1.6s-5.7-.6-7.2-1.6v2.3zm7.2-7.8c-4 0-7.2 1-7.2 2.2s3.2 2.2 7.2 2.2 7.2-1 7.2-2.2-3.2-2.2-7.2-2.2zm0 17.8c-3.1 0-5.8-.6-7.2-1.5v2.3c0 1.2 3.2 2.2 7.2 2.2 4 0 7.2-1 7.2-2.2v-2.3c-1.4.9-4.1 1.5-7.2 1.5z" />
      </svg>
    );
  }

  // PHP
  if (normalized === 'php') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-4 13.5H6.5v-7H9c1.4 0 2.3.9 2.3 2.3 0 1.5-1 2.4-2.5 2.4H8v2.3zm5.5 0h-1.5v-7H14c1.4 0 2.3.9 2.3 2.3 0 1.5-.9 2.4-2.4 2.4H13.5v2.3zm-5.5-4.5h1c.6 0 1-.4 1-1s-.4-1-1-1H8v2zm5.5 0h1c.6 0 1-.4 1-1s-.4-1-1-1h-1v2z" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.8 10.3c-.4-.3-1.6-.4-2.4-.2-.2-.5-.5-.9-.9-1.2l-.5-.3-.3.5c-.3.6-.3 1.4 0 2.1-.4.2-1.3.4-1.8.4H2.4c-.4 0-.8.3-.9.7-.5 2.2.1 4.5 1.7 6.1 1.6 1.7 3.8 2.5 6.3 2.5 5.5 0 9.8-3.3 11-8.5.8-.1 1.8-.4 2.3-1.6.2-.2.2-.4 0-.5zm-14-1.4h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2h-2v-2zm9 0h2v2h-2v-2zm-6-3h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z" />
      </svg>
    );
  }

  // Git / GitHub
  if (normalized.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.9 4.5l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.6-1.3-.4-1.9l-2.4-2.4v5.3c.2.1.3.3.5.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.4-.4.6-.5V8.8c.2-.1.4-.3.6-.5.5-.5.6-1.3.4-1.9L12 3.8 2.4 13.4c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.5.6-1.5 0-2.1z" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-4 0-6 2-8 6 1.5-2 3.5-3 5.5-2.5 1.2.3 2.1 1.2 3.1 2.2 1.6 1.6 3.4 3.5 7.4 3.5 4 0 6-2 8-6-1.5 2-3.5 3-5.5 2.5-1.2-.3-2.1-1.2-3.1-2.2-1.6-1.6-3.4-3.5-7.4-3.5zM4 14c-4 0-6 2-8 6 1.5-2 3.5-3 5.5-2.5 1.2.3 2.1 1.2 3.1 2.2 1.6 1.6 3.4 3.5 7.4 3.5 4 0 6-2 8-6-1.5 2-3.5 3-5.5 2.5-1.2-.3-2.1-1.2-3.1-2.2-1.6-1.6-3.4-3.5-7.4-3.5z" />
      </svg>
    );
  }

  // Power BI
  if (normalized.includes('power bi')) {
    return <BarChart3 className={`${className} text-amber-400`} />;
  }

  // DAX
  if (normalized === 'dax') {
    return <Binary className={`${className} text-amber-400`} />;
  }

  // Star Schema
  if (normalized.includes('star schema')) {
    return <Sparkles className={`${className} text-amber-300`} />;
  }

  // Scikit-learn, PyTorch, TensorFlow
  if (normalized.includes('scikit')) {
    return <Cpu className={`${className} text-blue-400`} />;
  }
  if (normalized.includes('pytorch')) {
    return <Flame className={`${className} text-orange-400`} />;
  }
  if (normalized.includes('tensorflow')) {
    return <Boxes className={`${className} text-amber-500`} />;
  }

  // DistilBERT, Transformers, NLP
  if (normalized.includes('distilbert') || normalized.includes('transformer') || normalized.includes('nlp')) {
    return <Brain className={`${className} text-purple-400`} />;
  }

  // YOLO, OpenCV
  if (normalized.includes('yolo') || normalized.includes('opencv')) {
    return <Eye className={`${className} text-emerald-400`} />;
  }

  // NumPy, Pandas, Matplotlib, Seaborn
  if (normalized.includes('numpy')) {
    return <Table className={`${className} text-cyan-400`} />;
  }
  if (normalized.includes('pandas')) {
    return <BarChart2 className={`${className} text-indigo-400`} />;
  }
  if (normalized.includes('matplotlib') || normalized.includes('seaborn')) {
    return <LineChart className={`${className} text-sky-400`} />;
  }

  // Excel
  if (normalized.includes('excel')) {
    return <FileSpreadsheet className={`${className} text-emerald-500`} />;
  }

  // SciPy, Statsmodels
  if (normalized.includes('scipy') || normalized.includes('statsmodels')) {
    return <Activity className={`${className} text-teal-400`} />;
  }

  // MySQL, MongoDB, Database
  if (normalized.includes('mysql') || normalized.includes('sql')) {
    return <Database className={`${className} text-blue-400`} />;
  }
  if (normalized.includes('mongodb')) {
    return <Database className={`${className} text-emerald-400`} />;
  }
  if (normalized.includes('normalization')) {
    return <CheckCircle2 className={`${className} text-moonstone`} />;
  }

  // AWS (S3, Lambda, Glue, Athena, CloudWatch)
  if (normalized.includes('aws') || normalized.includes('amazon') || normalized.includes('cloudwatch')) {
    return <Cloud className={`${className} text-amber-400`} />;
  }
  if (normalized.includes('etl')) {
    return <Workflow className={`${className} text-moonstone`} />;
  }

  // FastAPI, Flask, Pydantic, ReportLab, Dialogflow, Chart.js
  if (normalized.includes('fastapi') || normalized.includes('flask')) {
    return <Zap className={`${className} text-emerald-400`} />;
  }
  if (normalized.includes('pydantic')) {
    return <CheckCircle2 className={`${className} text-rose-400`} />;
  }
  if (normalized.includes('reportlab')) {
    return <FileText className={`${className} text-moonstone`} />;
  }
  if (normalized.includes('dialogflow')) {
    return <Bot className={`${className} text-amber-400`} />;
  }
  if (normalized.includes('chart.js')) {
    return <PieChart className={`${className} text-rose-400`} />;
  }

  // Methodologies & Tools
  if (normalized.includes('crisp-dm')) {
    return <Layers className={`${className} text-moonstone`} />;
  }
  if (normalized.includes('monte carlo') || normalized.includes('markov')) {
    return <Sparkles className={`${className} text-amber-300`} />;
  }
  if (normalized.includes('microsoft office')) {
    return <FileSpreadsheet className={`${className} text-blue-400`} />;
  }
  if (normalized.includes('filmora')) {
    return <Video className={`${className} text-purple-400`} />;
  }
  if (normalized.includes('canva')) {
    return <Palette className={`${className} text-cyan-400`} />;
  }

  // Default fallback
  return <Code2 className={`${className} text-moonstone`} />;
};

export default TechIcon;

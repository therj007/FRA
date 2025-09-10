import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend 
} from 'recharts';
import { 
  Trees, MapPin, Users, FileText, Upload, Eye, Filter, Layers,
  Home, Map, Brain, Database, User, ChevronDown, CheckCircle,
  Clock, AlertCircle, Download, Search, FileCheck
} from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('');

  // Sample data for charts and tables
  const keyMetrics = [
    { title: 'Total Claims Processed', value: '45,678', icon: FileText, color: 'text-primary' },
    { title: 'Total Area Recognized (Hectares)', value: '2,34,567', icon: Trees, color: 'text-success' },
    { title: 'Total Beneficiaries', value: '1,23,456', icon: Users, color: 'text-govt-blue' },
    { title: 'Schemes Recommended', value: '89', icon: Brain, color: 'text-warning' }
  ];

  const claimsData = [
    { state: 'Maharashtra', approved: 120, pending: 45, rejected: 15 },
    { state: 'Odisha', approved: 95, pending: 32, rejected: 8 },
    { state: 'Madhya Pradesh', approved: 78, pending: 28, rejected: 12 },
    { state: 'Chhattisgarh', approved: 89, pending: 19, rejected: 6 },
    { state: 'Jharkhand', approved: 67, pending: 25, rejected: 9 }
  ];

  const landUseData = [
    { name: 'Forest Cover', value: 45, color: '#22c55e' },
    { name: 'Agricultural Land', value: 30, color: '#eab308' },
    { name: 'Water Bodies', value: 15, color: '#3b82f6' },
    { name: 'Homesteads', value: 10, color: '#f97316' }
  ];

  const recentActivity = [
    { file: 'Village_Patta_Doc_01.pdf', village: 'Khargone', type: 'IFR', date: '2024-01-15', status: 'Completed' },
    { file: 'CFR_Claim_Mandla.tiff', village: 'Mandla', type: 'CFR', date: '2024-01-14', status: 'Processing' },
    { file: 'Survey_Report_Balaghat.pdf', village: 'Balaghat', type: 'IFR', date: '2024-01-14', status: 'Completed' },
    { file: 'Asset_Map_Dindori.kml', village: 'Dindori', type: 'CFR', date: '2024-01-13', status: 'Error' }
  ];

  const processingQueue = [
    { fileName: 'Village_Survey_Khargone_2024.pdf', village: 'Khargone', claimType: 'IFR', uploadDate: '2024-01-15', status: 'Completed' },
    { fileName: 'CFR_Documents_Mandla_Batch1.zip', village: 'Mandla', claimType: 'CFR', uploadDate: '2024-01-14', status: 'Processing' },
    { fileName: 'Asset_Verification_Balaghat.tiff', village: 'Balaghat', claimType: 'IFR', uploadDate: '2024-01-14', status: 'Processing' },
    { fileName: 'Community_Rights_Dindori.pdf', village: 'Dindori', claimType: 'CFR', uploadDate: '2024-01-13', status: 'Error' },
    { fileName: 'Land_Records_Seoni_Historical.pdf', village: 'Seoni', claimType: 'IFR', uploadDate: '2024-01-12', status: 'Completed' }
  ];

  const schemes = [
    { name: 'Jal Jeevan Mission', priority: 'High', beneficiaries: '2,400', description: 'Clean water access for rural households' },
    { name: 'PM-KISAN', priority: 'High', beneficiaries: '1,800', description: 'Direct income support for farmers' },
    { name: 'MGNREGA', priority: 'Medium', beneficiaries: '3,200', description: 'Rural employment guarantee program' },
    { name: 'DAJGUA', priority: 'Medium', beneficiaries: '900', description: 'Tribal area development initiatives' }
  ];

  const getStatusBadge = (status) => {
    const statusClasses = {
      'Completed': 'status-badge-success',
      'Processing': 'status-badge-warning',
      'Error': 'status-badge-error'
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`;
  };

  const getPriorityBadge = (priority) => {
    const priorityClasses = {
      'High': 'bg-destructive/10 text-destructive border border-destructive/20',
      'Medium': 'bg-warning/10 text-warning border border-warning/20',
      'Low': 'bg-muted text-muted-foreground border border-border'
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${priorityClasses[priority]}`;
  };

  const Navigation = () => (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Trees className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold text-foreground">FRA Atlas & Decision Support System</h1>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: Home },
                { id: 'atlas', label: 'FRA Atlas', icon: Map },
                { id: 'dss', label: 'Decision Support System', icon: Brain },
                { id: 'data', label: 'Data Management', icon: Database }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <User className="h-8 w-8 p-1 text-muted-foreground bg-accent rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );

  const Dashboard = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => (
          <div key={index} className="metric-card p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                <p className="text-2xl font-bold text-foreground mt-1">{metric.value}</p>
              </div>
              <metric.icon className={`h-8 w-8 ${metric.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Map Overview */}
      <div className="govt-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">FRA Claims Overview</h2>
        <div className="bg-forest-light rounded-lg h-64 flex items-center justify-center border border-border/50">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Interactive Map of India</p>
            <p className="text-xs text-muted-foreground">Showing FRA claims distribution</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="govt-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Claims Status by State</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={claimsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="state" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="approved" fill="hsl(var(--success))" name="Approved" />
              <Bar dataKey="pending" fill="hsl(var(--warning))" name="Pending" />
              <Bar dataKey="rejected" fill="hsl(var(--destructive))" name="Rejected" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="govt-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Land Use Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={landUseData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {landUseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="govt-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Digitization Activity</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-sm font-medium text-muted-foreground">Document</th>
                <th className="text-left py-2 text-sm font-medium text-muted-foreground">Village</th>
                <th className="text-left py-2 text-sm font-medium text-muted-foreground">Type</th>
                <th className="text-left py-2 text-sm font-medium text-muted-foreground">Date</th>
                <th className="text-left py-2 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((activity, index) => (
                <tr key={index} className="border-b border-border/50">
                  <td className="py-3 text-sm text-foreground">{activity.file}</td>
                  <td className="py-3 text-sm text-foreground">{activity.village}</td>
                  <td className="py-3 text-sm text-foreground">{activity.type}</td>
                  <td className="py-3 text-sm text-muted-foreground">{activity.date}</td>
                  <td className="py-3">
                    <span className={getStatusBadge(activity.status)}>{activity.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const Atlas = () => (
    <div className="flex gap-6 h-[calc(100vh-8rem)]">
      {/* Control Panel */}
      <div className="w-1/4 space-y-6">
        <div className="govt-card p-4">
          <h3 className="font-semibold text-foreground mb-4 flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">State</label>
              <select className="w-full p-2 border border-border rounded-md bg-background text-foreground">
                <option>Select State</option>
                <option>Maharashtra</option>
                <option>Madhya Pradesh</option>
                <option>Odisha</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">District</label>
              <select className="w-full p-2 border border-border rounded-md bg-background text-foreground">
                <option>Select District</option>
                <option>Khargone</option>
                <option>Mandla</option>
                <option>Balaghat</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Village</label>
              <select className="w-full p-2 border border-border rounded-md bg-background text-foreground">
                <option>Select Village</option>
                <option>Village A</option>
                <option>Village B</option>
                <option>Village C</option>
              </select>
            </div>
          </div>
        </div>

        <div className="govt-card p-4">
          <h3 className="font-semibold text-foreground mb-4 flex items-center">
            <Layers className="h-4 w-4 mr-2" />
            Data Layers
          </h3>
          <div className="space-y-2">
            {[
              'Individual Forest Rights (IFR)',
              'Community Forest Rights (CFR)',
              'Village Boundaries',
              'Satellite Imagery',
              'Mapped Assets (Water Bodies, Farms)',
              'PM Gati Shakti Infrastructure'
            ].map((layer, index) => (
              <label key={index} className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="rounded border-border" defaultChecked={index < 3} />
                <span className="text-foreground">{layer}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="govt-card p-4">
          <h3 className="font-semibold text-foreground mb-4">Map Legend</h3>
          <div className="space-y-2">
            {[
              { label: 'IFR Claims', color: 'bg-success' },
              { label: 'CFR Claims', color: 'bg-info' },
              { label: 'Village Boundaries', color: 'bg-warning' },
              { label: 'Water Bodies', color: 'bg-govt-blue' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded ${item.color}`}></div>
                <span className="text-sm text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 govt-card p-4">
        <div className="bg-forest-light rounded-lg h-full flex items-center justify-center border border-border/50">
          <div className="text-center">
            <Map className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Interactive WebGIS Map</h3>
            <p className="text-sm text-muted-foreground">Detailed view of FRA claims and forest boundaries</p>
            <p className="text-xs text-muted-foreground mt-2">Use the controls on the left to filter and toggle layers</p>
          </div>
        </div>
      </div>
    </div>
  );

  const DSS = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Selection Column */}
      <div className="govt-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Select Region for Analysis</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">State</label>
            <select 
              className="w-full p-3 border border-border rounded-md bg-background text-foreground"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Select State</option>
              <option value="mp">Madhya Pradesh</option>
              <option value="mh">Maharashtra</option>
              <option value="od">Odisha</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">District</label>
            <select 
              className="w-full p-3 border border-border rounded-md bg-background text-foreground"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">Select District</option>
              <option value="mandla">Mandla</option>
              <option value="balaghat">Balaghat</option>
              <option value="dindori">Dindori</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Village</label>
            <select 
              className="w-full p-3 border border-border rounded-md bg-background text-foreground"
              value={selectedVillage}
              onChange={(e) => setSelectedVillage(e.target.value)}
            >
              <option value="">Select Village</option>
              <option value="village1">Khargone Village</option>
              <option value="village2">Mandla Village</option>
              <option value="village3">Balaghat Village</option>
            </select>
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md hover:bg-primary-hover transition-colors font-medium">
            Generate Recommendations
          </button>
        </div>
      </div>

      {/* Regional Data Column */}
      <div className="govt-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Socio-Economic & Asset Overview</h3>
        {selectedVillage ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-accent/50 rounded-lg">
                <Users className="h-8 w-8 text-govt-blue mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Population</p>
                <p className="text-lg font-semibold text-foreground">1,204</p>
              </div>
              <div className="text-center p-3 bg-accent/50 rounded-lg">
                <MapPin className="h-8 w-8 text-info mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Water Index</p>
                <p className="text-lg font-semibold text-warning">Low</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm text-foreground">Primary Livelihood</span>
                <span className="text-sm font-medium text-foreground">Agriculture</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm text-foreground">Forest Dependency</span>
                <span className="text-sm font-medium text-success">High</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm text-foreground">Infrastructure Score</span>
                <span className="text-sm font-medium text-warning">Medium</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm text-foreground">FRA Status</span>
                <span className="text-sm font-medium text-info">Partially Recognized</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Select a region to view analysis</p>
          </div>
        )}
      </div>

      {/* Scheme Recommendations Column */}
      <div className="govt-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recommended Central Sector Schemes (CSS)</h3>
        {selectedVillage ? (
          <div className="space-y-4">
            {schemes.map((scheme, index) => (
              <div key={index} className="border border-border rounded-lg p-4 bg-accent/20">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-foreground">{scheme.name}</h4>
                  <span className={getPriorityBadge(scheme.priority)}>{scheme.priority}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{scheme.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Potential Beneficiaries: <strong className="text-foreground">{scheme.beneficiaries}</strong></span>
                  <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md hover:bg-secondary-hover transition-colors text-xs font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Brain className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Generate analysis to see recommendations</p>
          </div>
        )}
      </div>
    </div>
  );

  const DataManagement = () => (
    <div className="space-y-6">
      {/* File Upload */}
      <div className="govt-card p-6">
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-accent/20 hover:bg-accent/30 transition-colors cursor-pointer">
          <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Upload FRA Documents</h3>
          <p className="text-muted-foreground mb-4">Drag & Drop scanned FRA documents here or click to browse</p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary-hover transition-colors font-medium">
            Browse Files
          </button>
          <p className="text-xs text-muted-foreground mt-2">Supports PDF, TIFF, JPG, PNG, KML files</p>
        </div>
      </div>

      {/* Processing Queue */}
      <div className="govt-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Digitization Queue</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 text-sm font-medium text-muted-foreground">File Name</th>
                <th className="text-left py-3 text-sm font-medium text-muted-foreground">Village</th>
                <th className="text-left py-3 text-sm font-medium text-muted-foreground">Claim Type</th>
                <th className="text-left py-3 text-sm font-medium text-muted-foreground">Upload Date</th>
                <th className="text-left py-3 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 text-sm font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {processingQueue.map((item, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground font-medium">{item.fileName}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-foreground">{item.village}</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-info/10 text-info rounded-full text-xs font-medium border border-info/20">
                      {item.claimType}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-muted-foreground">{item.uploadDate}</td>
                  <td className="py-4">
                    <span className={getStatusBadge(item.status)}>
                      {item.status === 'Completed' && <CheckCircle className="h-3 w-3 inline mr-1" />}
                      {item.status === 'Processing' && <Clock className="h-3 w-3 inline mr-1" />}
                      {item.status === 'Error' && <AlertCircle className="h-3 w-3 inline mr-1" />}
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4">
                    {item.status === 'Completed' ? (
                      <button className="flex items-center space-x-1 bg-success text-success-foreground px-3 py-1 rounded-md hover:bg-success/90 transition-colors text-xs font-medium">
                        <Eye className="h-3 w-3" />
                        <span>Review</span>
                      </button>
                    ) : item.status === 'Error' ? (
                      <button className="flex items-center space-x-1 bg-destructive text-destructive-foreground px-3 py-1 rounded-md hover:bg-destructive/90 transition-colors text-xs font-medium">
                        <AlertCircle className="h-3 w-3" />
                        <span>Retry</span>
                      </button>
                    ) : (
                      <span className="text-xs text-muted-foreground">Processing...</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard': return <Dashboard />;
      case 'atlas': return <Atlas />;
      case 'dss': return <DSS />;
      case 'data': return <DataManagement />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
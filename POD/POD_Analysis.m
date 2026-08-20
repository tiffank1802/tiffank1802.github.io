clc;
clear all;

N=800;
M=1000;
x = linspace(0, pi, N)';
t = linspace(0, pi, M);
X = zeros(N, M);

% Calculation of matrix X
for i = 1:N
    for j = 1:M
        r = sqrt((t(j) - pi)^2 + (x(i) - pi)^2);
        X(i, j) = 0.5 * sin(3 * t(j)) * cos(2 * x(i)) + ...
                  0.3 * sin(5 * r) + ...
                  0.2 * cos(0.5 * t(j) + 1.5 * x(i)) * exp(-0.1 * r);
    end
end

% Center the data
mean_u = mean(X, 2);
X_centered = X - mean_u;

% Calculation of the correlation matrix
C = (1/M) * X_centered * X_centered';

% Plot Matrix X
figure(1);
subplot(2, 2, 2);
imagesc(X);
colormap(jet);
axis image;
title('Matrix X');
caxis([-1, 2]);
xlabel('t');
ylabel('x');
colorbar;
print('images/X_original.png', '-dpng');

% Compute eigenvectors and eigenvalues
[vecp,valp]=eig(C); % fonction eig

% Ordering from highest to lowest eigenvalue
[lambda,idx] = sort(diag(valp), 'descend');
phi = vecp(:, idx);

% Calculation of the time coefficients
a = phi' * X_centered;

% Number of considered POD modes (example for L=1)
L=1;
% Calculation of X_POD
X_POD = phi(:,1:L) * a(1:L,:) + mean_u;

% Plot Eigenvalues
subplot(2, 2, 1);
plot(lambda,'.');
xlabel('POD mode index');
title('Eigenvalues');
print('images/eigenvalues.png', '-dpng');

% Plot X_POD
subplot(2, 2, [3, 4]);
imagesc(X_POD);
colormap(jet);
axis image;
title('Matrix X_POD');
caxis([-1, 2]);
colorbar;
xlabel('t');
ylabel('x');
print('images/X_POD.png', '-dpng');

% Additional: Plot first 5 spatial modes
for i = 1:5
    figure(3 + i);
    plot(x, phi(:,i));
    title(['POD Mode ' num2str(i)]);
    xlabel('x');
    ylabel('Amplitude');
    print(['images/mode', num2str(i), '.png'], '-dpng');
end

% Additional: Plot first 5 temporal coefficients
figure(3);
for i = 1:5
    subplot(5,1,i);
    plot(t, a(i,:));
    title(['Temporal Coeff ' num2str(i)]);
end
print('images/temporal_coeffs.png', '-dpng');

% Reconstruction errors for k=1,3,5
% for k = [1 3 5]
%     X_POD_k = phi(:,1:k) * a(1:k,:) + mean_u;
%     error = norm(X - X_POD_k, 'fro') / norm(X, 'fro');
%     disp(['Relative error for k=' num2str(k) ': ' num2str(error)]);
% end

% Noisy data (commented out for now)
% X_noisy = X + 0.5 * randn(N, M);
% mean_u_noisy = mean(X_noisy, 2);
% X_noisy_centered = X_noisy - mean_u_noisy;
% C_noisy = (1/M) * X_noisy_centered * X_noisy_centered';
% [vecp_noisy,valp_noisy]=eig(C_noisy);
% [lambda_noisy,idx_noisy] = sort(diag(valp_noisy), 'descend');
% phi_noisy = vecp_noisy(:, idx_noisy);

% Compare modes
% for i=1:5
%     sign = sign(sum(phi(:,i) .* phi_noisy(:,i)));
%     diff = norm(phi(:,i) - sign * phi_noisy(:,i));
%     disp(['Norm diff for mode ' num2str(i) ': ' num2str(diff)]);
% end

